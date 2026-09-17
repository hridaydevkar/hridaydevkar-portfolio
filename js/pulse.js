/* Live pulse — a monitoring heartbeat across the hero.
   Canvas 2D, no dependencies. Pauses off-screen, respects reduced motion.

   Clean SCROLLING approach — the trace flows continuously right-to-left
   like a real bedside monitor printout. No gaps, no wiper.

   - Beats are scheduled with organic variation (58–88 BPM)
   - Each beat has a unique amplitude and one of 4 waveform shapes
   - The trace fades smoothly at the left edge
   - A bright pen dot glows at the right edge
   - Live BPM readout updates with each beat

   Hriday = "heart" — the pulse IS the brand. */
(() => {
  const canvas = document.getElementById('pulse-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const hero = document.querySelector('.hero');
  const bpmEl = document.getElementById('bpm-value');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const RED = '#E8927C';
  const SPEED = 120; // px/s — scroll speed

  let W = 0, H = 0, dpr = 1;
  let totalTime = 0;

  function resize() {
    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;
    if (!cw || !ch) return;
    dpr = Math.min(2, window.devicePixelRatio || 1);
    W = cw;
    H = ch;
    const bw = Math.max(1, Math.round(W * dpr));
    const bh = Math.max(1, Math.round(H * dpr));
    if (canvas.width !== bw || canvas.height !== bh) {
      canvas.width = bw;
      canvas.height = bh;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  if ('ResizeObserver' in window) {
    new ResizeObserver(resize).observe(canvas);
  }
  window.addEventListener('resize', resize, { passive: true });

  /* ───────── Beat schedule ───────── */
  const beats = [];
  let nextBeatTime = 0.4;
  let currentBPM = 72;
  let displayBPM = 72;

  function scheduleBeat() {
    const r = Math.random;
    const bpm = 58 + r() * 30;
    currentBPM = Math.round(bpm);
    const gap = 60 / bpm + (r() - 0.5) * 0.08;

    const kindR = r();
    let kind, amp, dur;
    if (kindR < 0.50) {
      kind = 'normal'; amp = 0.72 + r() * 0.28; dur = 0.46 + r() * 0.08;
    } else if (kindR < 0.78) {
      kind = 'strong'; amp = 0.88 + r() * 0.12; dur = 0.42 + r() * 0.06;
    } else if (kindR < 0.92) {
      kind = 'soft';   amp = 0.48 + r() * 0.20; dur = 0.50 + r() * 0.10;
    } else {
      kind = 'pvc';    amp = 0.58 + r() * 0.28; dur = 0.35 + r() * 0.07;
    }

    beats.push({ t: nextBeatTime, kind, amp, dur });
    nextBeatTime += gap;
  }

  while (nextBeatTime < 30) scheduleBeat();

  /* ───────── ECG shapes ───────── */
  function ekgNormal(p) {
    if (p < 0.05 || p > 0.82) return 0;
    if (p < 0.18) return 0.12 * Math.sin(((p - 0.05) / 0.13) * Math.PI);
    if (p < 0.28) return 0;
    if (p < 0.34) return -0.11 * Math.sin(((p - 0.28) / 0.06) * Math.PI);
    if (p < 0.41) return 1.0  * Math.sin(((p - 0.34) / 0.07) * Math.PI);
    if (p < 0.47) return -0.30 * Math.sin(((p - 0.41) / 0.06) * Math.PI);
    if (p < 0.57) return 0;
    return 0.20 * Math.sin(((p - 0.57) / 0.25) * Math.PI);
  }

  function ekgStrong(p) {
    if (p < 0.04 || p > 0.80) return 0;
    if (p < 0.15) return 0.15 * Math.sin(((p - 0.04) / 0.11) * Math.PI);
    if (p < 0.24) return 0;
    if (p < 0.30) return -0.15 * Math.sin(((p - 0.24) / 0.06) * Math.PI);
    if (p < 0.37) return 1.0  * Math.sin(((p - 0.30) / 0.07) * Math.PI);
    if (p < 0.44) return -0.42 * Math.sin(((p - 0.37) / 0.07) * Math.PI);
    if (p < 0.53) return 0;
    return 0.26 * Math.sin(((p - 0.53) / 0.27) * Math.PI);
  }

  function ekgPVC(p) {
    if (p < 0.06 || p > 0.76) return 0;
    if (p < 0.20) return -0.14 * Math.sin(((p - 0.06) / 0.14) * Math.PI);
    if (p < 0.36) return 0.88  * Math.sin(((p - 0.20) / 0.16) * Math.PI);
    if (p < 0.50) return -0.46 * Math.sin(((p - 0.36) / 0.14) * Math.PI);
    return -0.10 * Math.sin(((p - 0.50) / 0.26) * Math.PI);
  }

  function ekgSoft(p) {
    if (p < 0.06 || p > 0.83) return 0;
    if (p < 0.17) return 0.08 * Math.sin(((p - 0.06) / 0.11) * Math.PI);
    if (p < 0.28) return 0;
    if (p < 0.33) return -0.06 * Math.sin(((p - 0.28) / 0.05) * Math.PI);
    if (p < 0.40) return 0.70  * Math.sin(((p - 0.33) / 0.07) * Math.PI);
    if (p < 0.46) return -0.18 * Math.sin(((p - 0.40) / 0.06) * Math.PI);
    if (p < 0.56) return 0;
    return 0.14 * Math.sin(((p - 0.56) / 0.27) * Math.PI);
  }

  const shapeFns = { normal: ekgNormal, strong: ekgStrong, pvc: ekgPVC, soft: ekgSoft };

  /* ───────── Sample ──────── */
  function sampleAt(t) {
    let v = 0;
    for (let i = beats.length - 1; i >= 0; i--) {
      const b = beats[i];
      const dt = t - b.t;
      if (dt < -0.05) continue;
      if (dt > b.dur + 0.05) break;
      if (dt >= 0 && dt <= b.dur) {
        const phase = dt / b.dur;
        v += (shapeFns[b.kind] || ekgNormal)(phase) * b.amp;
      }
    }
    // Very subtle organic baseline wander
    v += 0.006 * Math.sin(t * 0.9) + 0.004 * Math.cos(t * 2.3);
    return v;
  }

  /* ───────── Render ───────── */
  function draw(thump) {
    ctx.clearRect(0, 0, W, H);
    const midY = H * 0.52;
    const amp = H * 0.36;

    /* Faint baseline */
    ctx.strokeStyle = 'rgba(235, 228, 220, 0.07)';
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 8]);
    ctx.beginPath();
    ctx.moveTo(0, midY);
    ctx.lineTo(W, midY);
    ctx.stroke();
    ctx.setLineDash([]);

    const timeAtRight = totalTime;
    const fadeZone = Math.min(W * 0.18, 160);

    ctx.save();
    ctx.lineWidth = 1.8;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    const segCount = 48;
    const segW = W / segCount;

    for (let s = 0; s < segCount; s++) {
      const xStart = s * segW;
      const xEnd = (s + 1) * segW;
      const xMid = (xStart + xEnd) / 2;

      let alpha = 1;
      if (xMid < fadeZone) {
        alpha = (xMid / fadeZone) * 0.85;
      }
      if (xMid > W - 80) {
        alpha = Math.min(1, alpha * (1 + (xMid - (W - 80)) / 80 * 0.15));
      }

      ctx.beginPath();
      ctx.strokeStyle = `rgba(232, 146, 124, ${(alpha * 0.9).toFixed(3)})`;

      if (xMid > W * 0.7) {
        ctx.shadowColor = 'rgba(232, 146, 124, 0.5)';
        ctx.shadowBlur = 3 + 8 * thump * ((xMid - W * 0.7) / (W * 0.3));
      } else {
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
      }

      for (let x = xStart; x <= xEnd; x += 1.5) {
        const t = timeAtRight - (W - x) / SPEED;
        const v = sampleAt(t);
        const y = midY - v * amp;
        if (x === xStart) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    ctx.restore();

    /* Pen dot at the right edge */
    const headV = sampleAt(timeAtRight);
    const yHead = midY - headV * amp;

    ctx.save();
    ctx.shadowColor = 'rgba(232, 146, 124, 0.55)';
    ctx.shadowBlur = 12 + 22 * thump;
    ctx.fillStyle = `rgba(232, 146, 124, ${0.35 + 0.45 * thump})`;
    ctx.beginPath();
    ctx.arc(W - 1, yHead, 4 + 3.5 * thump, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 4;
    ctx.fillStyle = RED;
    ctx.globalAlpha = 0.9 + 0.1 * thump;
    ctx.beginPath();
    ctx.arc(W - 1, yHead, 1.8 + 1.2 * thump, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  /* ───────── Visibility ──────── */
  let visible = true;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((es) => { visible = es[0].isIntersecting; }, { threshold: 0 })
      .observe(hero);
  }

  if (reduced) {
    resize();
    totalTime = 12;
    draw(0);
    return;
  }

  /* ───────── Animation loop ───────── */
  resize();
  totalTime = (W / SPEED) + 1;

  let last = performance.now();
  let thump = 0;
  let bpmTimer = 0;

  function frame(now) {
    requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (!visible) return;

    if (canvas.clientWidth !== W || canvas.clientHeight !== H) resize();

    totalTime += dt;

    while (nextBeatTime < totalTime + 20) scheduleBeat();

    const cutoff = totalTime - (W / SPEED) - 2;
    while (beats.length > 0 && beats[0].t + beats[0].dur < cutoff) beats.shift();

    const v = Math.abs(sampleAt(totalTime));
    const vPrev = Math.abs(sampleAt(totalTime - dt));
    if (v > 0.45 && vPrev <= 0.45) thump = 1;
    thump = Math.max(0, thump - dt / 0.5);

    draw(thump);

    bpmTimer += dt;
    if (bpmTimer > 0.7 && bpmEl) {
      bpmTimer = 0;
      displayBPM += (currentBPM - displayBPM) * 0.2;
      bpmEl.textContent = Math.round(displayBPM);
    }
  }

  requestAnimationFrame(frame);
})();
