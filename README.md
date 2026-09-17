# Hriday Devkar

> Backend developer. The heartbeat in the hero is intentional — *hriday* means heart.

**[Live site](https://hridaydevkar.github.io/hridaydevkar-portfolio)** · [GitHub](https://github.com/hridaydevkar) · [LinkedIn](https://www.linkedin.com/in/hridaydevkar) · [hridaydevkar@gmail.com](mailto:hridaydevkar@gmail.com)

## What this is

My personal portfolio, hand-built with plain **HTML, CSS, and JavaScript**.

No frameworks. No build step. No dependencies. One page that loads fast,
stays fast, and will still open in ten years.

The opening is a live electrocardiogram: a heartbeat drawn procedurally on a
canvas, with the rhythm actually changing — different beat shapes, different
spacing, a live BPM readout that eases toward whatever the trace is doing.
It's the brand, and the pun, and it's on purpose.

## What's on the page

| Section | What it does |
| --- | --- |
| **Hero** | Centered intro over the live ECG trace with a real-time BPM pill |
| **Profile** | What I do, where I've worked, and a numbered capability index |
| **Track Record** | Experience as a timeline — Route Mobile, Mahainfratech |
| **Selected Work** | The projects I stand behind: PulseWatch, Flint, Solar, Voting |
| **Toolbox** | Languages, frameworks, tools, and where to find them |
| **Transmission** | How to reach me |

## Design

A "warm dark study": deep espresso background, warm bone type, one soft
terracotta accent that the heartbeat shares. No neon, no gradients doing
work they shouldn't.

- **Type** — Archivo (display), Instrument Serif (the italics that earn their
  keep), JetBrains Mono (data). All **self-hosted**, nothing fetched from a CDN.
- **Motion** — only where it means something: the pulse, hover feedback,
  scroll reveals. Everything respects `prefers-reduced-motion`.
- **Responsive** — same layout thinking from a phone to a wall monitor.

## Run it locally

There's nothing to install. Either open `index.html` directly, or:

```bash
python3 -m http.server 8123
# → http://localhost:8123
```

## Deploy

This repo is the site. Push it to the `gh-pages` branch and you're live:

```bash
npx gh-pages -d .
```

## Structure

```
├── index.html          # the whole page
├── css/
│   └── styles.css      # design system + layout, zero preprocessor
├── js/
│   ├── main.js         # clock, scroll reveals, nav
│   └── pulse.js        # the heartbeat — procedural ECG + live BPM
└── assets/
    ├── fonts/          # self-hosted woff2
    └── img/            # project screenshots
```

## Projects worth a look

- **[PulseWatch](https://github.com/hridaydevkar/pulsewatch)** — self-hosted
  uptime & status pages with multi-region checks and pluggable alerting.
  FastAPI, no cloud required.
- **[Flint](https://github.com/hridaydevkar/flint)** — a small statically
  typed language with a compiler I wrote from scratch: lexer, parser,
  type checker, IR, and a hand-rolled WebAssembly encoder. Zero dependencies.

## Contact

- **Email** — [hridaydevkar@gmail.com](mailto:hridaydevkar@gmail.com)
- **GitHub** — [@hridaydevkar](https://github.com/hridaydevkar)
- **LinkedIn** — [hridaydevkar](https://www.linkedin.com/in/hridaydevkar)

## License

[MIT](LICENSE) — the code is here to be read. The heartbeat is the point.
