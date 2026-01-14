![WIP](https://img.shields.io/badge/Status-Work%20In%20Progress-yellow?style=for-the-badge)
# 🎨 Bentolio Portfolio

A modern, bento-grid style portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean, responsive design with smooth animations and an elegant UI.

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge)](https://devrac.netlify.app/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/a9e12e9d-5f4b-4767-aa09-ac6671d7f972/deploy-status)](https://app.netlify.com/projects/devrac/deploys)

## ✨ Features

- **Bento Grid Layout**: Modern, card-based design inspired by Apple's design language
- **Fully Responsive**: Optimized for all screen sizes from mobile to desktop
- **Smooth Animations**: Engaging micro-interactions and transitions
- **Dark Mode Ready**: Built with dark theme aesthetics
- **Fast Performance**: Optimized with Vite and modern build tools
- **Type-Safe**: Built with TypeScript for robust code
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🚀 Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Runtime**: Bun
- **Deployment**: Netlify
- **Linting**: ESLint

## 📋 Prerequisites

Before you begin, ensure you have installed:
- [Bun](https://bun.sh/) v1.2.23 or higher (or Node.js v18+)
- Git

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Devatva24/Bentolio-Portfolio.git
   cd Bentolio-Portfolio
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```
   
   Or with npm:
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   bun run dev
   ```
   
   Or with npm:
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the portfolio in action.

## 📜 Available Scripts

```bash
# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Run linting
bun run lint
```

## 📁 Project Structure

```
Bentolio-Portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── assets/         # Images, fonts, etc.
│   ├── styles/         # Global styles
│   ├── App.tsx         # Main App component
│   └── main.tsx        # Entry point
├── index.html          # HTML template
├── tailwind.config.js  # Tailwind configuration
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies and scripts
```

## 🎨 Customization

### Update Personal Information

1. Edit the content in `src/components/` to update your:
   - Name and bio
   - Skills and expertise
   - Projects and experience
   - Contact information

### Modify Theme Colors

Update `tailwind.config.js` to customize the color scheme:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add your custom colors
      }
    }
  }
}
```

### Change Layout

The bento grid layout can be modified in the main component files. Adjust the grid structure using Tailwind's grid utilities.

## 🚀 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to [Netlify](https://netlify.com)
3. Configure build settings:
   - Build command: `bun run build` or `npm run build`
   - Publish directory: `dist`
4. Deploy!

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

### Deploy to GitHub Pages

Update `vite.config.ts` with your repository name and use the `gh-pages` branch for deployment.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Devatva24/Bentolio-Portfolio/issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Devatva Rachit**

- Website: [devrac.netlify.app](https://devrac.netlify.app/)
- GitHub: [@Devatva24](https://github.com/Devatva24)

## ⭐ Show your support

Give a ⭐️ if this project helped you!

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Bento grid layout inspired by Apple's design language
- Built with amazing open-source tools

---

**Made with ❤️ by Devatva Rachit**
