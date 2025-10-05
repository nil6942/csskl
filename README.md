# Nilabh Deka - Warhammer 40K Inspired Portfolio

A stunning 3D portfolio website inspired by the dark gothic aesthetic of Warhammer 40K, featuring immersive 3D animations, floating geometric shapes, and dramatic visual effects.

## 🎨 Features

- **3D Interactive Background**: Built with Three.js and React Three Fiber
- **Warhammer 40K Aesthetic**: Dark gothic theme with imperial gold and blood red accents
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Responsive Design**: Fully responsive across all devices
- **3D Elements**:
  - Floating gothic orbs with distortion effects
  - Imperial geometric shapes
  - Dynamic particle systems
  - Animated starfield
  - Interactive camera controls

## 🛠️ Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **Framer Motion** - Animation library
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 🎯 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Scene3D.jsx      # Main 3D scene with Three.js objects
│   │   ├── Hero.jsx         # Hero section with name and title
│   │   ├── About.jsx        # About section with background
│   │   ├── Skills.jsx       # Skills showcase
│   │   ├── Contact.jsx      # Contact and social links
│   │   └── Loader.jsx       # Loading screen
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎨 Color Palette

The portfolio uses a custom Warhammer 40K-inspired color scheme:

- **Dark**: `#0a0a0a` - Deep space black
- **Gold**: `#d4af37` - Imperial gold
- **Blood**: `#8b0000` - Blood red
- **Metal**: `#2c3e50` - Dark metal
- **Bronze**: `#cd7f32` - Ancient bronze
- **Imperial**: `#1a1a2e` - Imperial purple-black

## 🎭 Typography

- **Gothic Font**: Cinzel - For headings and dramatic text
- **Body Font**: Rajdhani - For readable body text

## ⚡ Performance Tips

- The 3D scene is optimized for performance
- Auto-rotation is enabled by default (can be disabled)
- Particle count is balanced for visual impact and performance
- All assets are loaded asynchronously with suspense

## 🎮 3D Scene Controls

- **Auto-rotate**: The scene slowly rotates automatically
- **Mouse/Touch**: Drag to rotate the camera view
- **Zoom**: Disabled to maintain consistent perspective
- **Pan**: Disabled to keep focus on the center

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Deployment

This project can be deployed to any static hosting service:

- **Vercel**: `vercel deploy`
- **Netlify**: Connect your git repository
- **GitHub Pages**: Use gh-pages package
- **Railway**: Direct deployment from GitHub

## 📄 License

This project is created for Nilabh Deka's personal portfolio.

## 👤 About

**Nilabh Deka**
- Student at Scaler School of Technology (1st Year)
- 3 Years of Experience in Tech Industry
- Specializations: Backend, Hosting, Frameworks, DL & RL, Auth, Databases

---

*"In the grim darkness of the far future, there is only innovation"*

**For the Emperor! For Excellence!**
