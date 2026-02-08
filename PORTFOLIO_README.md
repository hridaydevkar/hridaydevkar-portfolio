# Hriday Devkar - Portfolio Website

Your personal portfolio website built with React, showcasing your projects and skills.

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ installed
- npm or yarn

### Running Locally

```bash
cd /Users/hriday/Documents/hridaydevkar/hridaydevkar-portfolio

# Install dependencies
npm install

# Start development server
npm start
```

The site will open at **http://localhost:1234**

## 📝 What's Been Updated

Your portfolio now features:

### Personal Information
- **Name**: Hriday Devkar
- **Title**: Full Stack Developer & ML Engineer
- **Email**: hridaydevkar@gmail.com
- **GitHub**: github.com/hridaydevkar

### Projects Showcased
1. **Blockchain E-Voting System** - Secure voting with face recognition & OTP
2. **Emotion Recognition System** - ML-powered facial emotion detection
3. **Fraud Detection System** - AI fraud detection algorithms
4. **Portfolio Website** - This React-based portfolio

### Skills Highlighted
- Python & Flask
- React & JavaScript
- PostgreSQL & Database Design
- Machine Learning & AI
- Blockchain Technology
- Face Recognition Systems
- RESTful APIs
- Cloud Deployment

## 🎨 Customization

### Update Projects
Edit `src/Components/Portfolio.jsx` to add/modify projects

### Update Skills & About
Edit `src/Components/About.jsx` to change your description and skills

### Update Contact Info
Edit `src/App.jsx` - update the `siteProps` object

### Change Colors
Edit `src/App.jsx` - modify `primaryColor` and `secondaryColor`

## 📦 Building for Production

```bash
# Build optimized production bundle
npm run build

# Output will be in /dist folder
```

## 🌐 Deploying to GitHub Pages

```bash
# Update package.json first:
# Replace {github-username} with: hridaydevkar
# Replace {repo-name} with: hridaydevkar-portfolio

# Then deploy:
npm run deploy
```

Your site will be live at: `https://hridaydevkar.github.io/hridaydevkar-portfolio/`

## 📁 Project Structure

```
hridaydevkar-portfolio/
├── src/
│   ├── App.jsx              # Main app component
│   ├── Components/
│   │   ├── About.jsx        # About section
│   │   ├── Footer.jsx       # Footer with social links
│   │   ├── Header.jsx       # Header/navigation
│   │   ├── Home.jsx         # Hero section
│   │   └── Portfolio.jsx    # Projects showcase
│   ├── images/              # Image assets
│   ├── index.html           # HTML entry point
│   ├── index.js             # JavaScript entry point
│   └── styles.css           # Global styles
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## 🛠️ Technologies Used

- **React 18** - UI framework
- **Parcel** - Zero-config bundler
- **JavaScript/JSX** - Programming language
- **CSS3** - Styling
- **GitHub Pages** - Hosting (optional)

## 💡 Tips

1. **Images**: Add your own images to `src/images/` folder
2. **Favicon**: Update favicon in `src/index.html`
3. **LinkedIn**: Update your LinkedIn URL in `src/App.jsx`
4. **Responsive**: The template is already mobile-responsive

## 🔗 Useful Links

- [React Documentation](https://reactjs.org/)
- [Parcel Documentation](https://parceljs.org/)
- [GitHub Pages Guide](https://pages.github.com/)

---

**Ready to launch!** Run `npm install && npm start` to see your portfolio live on localhost.
