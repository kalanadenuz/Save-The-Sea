# 🌊 Save the Sea - Ocean Conservation App

<div align="center">

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

*A modern, gamified mobile app that inspires ocean conservation through daily challenges, virtual pet care, and community engagement.*

[🚀 Live Demo](#-quick-start) • [📱 Screenshots](#-screenshots) • [🛠️ Tech Stack](#️-tech-stack) • [🤝 Contributing](#-contributing)

</div>

---

## ✨ Features

### 🐢 Virtual Sea Pet
- **Marina the Turtle**: Your digital companion that reacts to your conservation efforts
- **Mood System**: Pet's mood changes based on your eco-actions
- **Health Tracking**: Monitor your pet's well-being with visual progress bars
- **Celebration Animations**: Special effects when completing challenges

### 🎯 Daily Challenges
- **Location-Specific Tasks**: Focused on Sri Lankan beaches and marine ecosystems
- **Point System**: Earn eco-points for completing conservation activities
- **Difficulty Levels**: Easy, Medium, and Hard challenges
- **Real Impact**: Connect virtual actions to real-world environmental benefits

### 📊 Progress Tracking
- **Streak Counter**: Track consecutive days of eco-friendly actions
- **Weekly Goals**: Set and monitor weekly conservation targets
- **Achievement System**: Unlock badges and rewards
- **Impact Metrics**: Visualize your environmental contributions

### 📚 Educational Content
- **Marine Life Facts**: Learn about ocean ecosystems and species
- **Conservation Tips**: Practical advice for daily eco-friendly living
- **Pollution Awareness**: Understand the impact of ocean pollution
- **Sri Lankan Focus**: Localized content about regional marine life

### 👥 Community Features
- **Social Sharing**: Share your conservation achievements
- **Community Challenges**: Participate in group conservation efforts
- **Leaderboards**: Friendly competition with other ocean protectors
- **Tips Exchange**: Share and discover conservation strategies

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/save-the-sea-app.git

# 2. Navigate to project directory
cd save-the-sea-app

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

---

## 📱 Screenshots

<div align="center">

### Home Screen
<img width="404" height="783" alt="image" src="https://github.com/user-attachments/assets/64d118d1-3577-46b1-a868-80a901479387" />


### Onboarding
<img width="371" height="758" alt="image" src="https://github.com/user-attachments/assets/2fd76370-6392-40a6-ba77-d3e30ac1d804" />


### Challenge Screen
<img width="377" height="762" alt="image" src="https://github.com/user-attachments/assets/d5d88055-d64b-4c4b-b82d-cd280a27408c" />


### Impact Tracking
<img width="353" height="770" alt="image" src="https://github.com/user-attachments/assets/a90770bf-f22b-403b-bd8d-6eb2603fdde8" />


</div>

---

## 🛠️ Tech Stack

### Frontend
- **[React 18.3.1](https://react.dev/)** - UI library with hooks and modern patterns
- **[TypeScript 5.8.3](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite 5.4.19](https://vitejs.dev/)** - Fast build tool and dev server
- **[Tailwind CSS 3.4.17](https://tailwindcss.com/)** - Utility-first CSS framework

### UI Components
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible component library
- **[Radix UI](https://www.radix-ui.com/)** - Headless UI primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### State Management
- **[TanStack Query](https://tanstack.com/query)** - Server state management
- **React Hooks** - Local state management

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - CSS vendor prefixes

---

## 📁 Project Structure

```
src/
├── components/              # React components
│   ├── ui/                 # Reusable UI components (shadcn/ui)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── progress.tsx
│   │   └── ...
│   ├── MobileFrame.tsx     # iPhone 14 Pro frame simulation
│   ├── SplashScreen.tsx    # App splash screen
│   ├── Onboarding.tsx      # Onboarding flow
│   ├── HomeScreen.tsx      # Main dashboard
│   ├── LearnScreen.tsx     # Educational content
│   ├── ImpactScreen.tsx    # User impact tracking
│   ├── CommunityScreen.tsx # Community features
│   ├── ProfileScreen.tsx   # User profile
│   └── Navigation.tsx      # Bottom navigation
├── assets/                 # Images and static assets
│   ├── healthy-ocean.jpg
│   ├── ocean-pollution.jpg
│   ├── pet-turtle.jpg
│   └── sea-turtle-hero.jpg
├── hooks/                  # Custom React hooks
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/                    # Utility functions
│   └── utils.ts
├── pages/                  # Page components
│   ├── Index.tsx
│   └── NotFound.tsx
├── App.tsx                 # Main app component
├── App.css                 # Global styles
├── index.css               # Tailwind CSS imports
└── main.tsx                # App entry point
```

---

## 🎨 Design System

### Mobile-First Approach
- **Target Device**: iPhone 14 Pro (390×844px)
- **Responsive Design**: Optimized for mobile screens
- **Touch-Friendly**: Large tap targets and intuitive gestures

### Color Palette
```css
/* Ocean Theme */
--primary-blue: #0ea5e9
--secondary-cyan: #22d3ee
--accent-teal: #06b6d4
--success-green: #10b981
--warning-orange: #f59e0b
```

### Typography
- **Headings**: Bold, clear hierarchy
- **Body Text**: Readable, accessible font sizes
- **Accessibility**: WCAG 2.1 AA compliant

### Animations
- **Micro-interactions**: Subtle hover and click effects
- **Transitions**: Smooth state changes
- **Celebrations**: Reward animations for achievements

---

## 🌍 Environmental Impact

This app is designed to:
- **Raise Awareness** about ocean pollution and marine conservation
- **Encourage Action** through gamified daily challenges
- **Build Community** around environmental protection
- **Educate Users** about sustainable living practices
- **Track Progress** of individual and collective impact

### Sri Lankan Focus
- **Local Beaches**: Unawatuna, Mirissa, Arugam Bay
- **Marine Ecosystems**: Madu Ganga, coral reefs
- **Cultural Context**: Local conservation efforts and traditions
- **Language Support**: English with local terminology

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Getting Started
1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/yourusername/save-the-sea-app.git`
3. **Create** a feature branch: `git checkout -b feature/amazing-feature`
4. **Install** dependencies: `npm install`

### Development Guidelines
- Follow the existing code style and patterns
- Write meaningful commit messages
- Add tests for new features
- Ensure accessibility compliance
- Update documentation as needed

### Submitting Changes
1. **Commit** your changes: `git commit -m 'Add amazing feature'`
2. **Push** to your branch: `git push origin feature/amazing-feature`
3. **Open** a Pull Request

### Areas for Contribution
- 🐛 Bug fixes
- ✨ New features
- 📚 Documentation improvements
- 🎨 UI/UX enhancements
- ♿ Accessibility improvements
- 🌍 Environmental content updates

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Ocean Conservation Organizations** for inspiration and educational content
- **Sri Lankan Marine Biologists** for local expertise
- **Open Source Community** for the amazing tools and libraries
- **shadcn/ui** for the beautiful component library
- **Radix UI** for accessible primitives

---

## 📞 Contact

- **Project Link**: [https://github.com/yourusername/save-the-sea-app](https://github.com/kalanadenuz/Save-The-Sea/save-the-sea-app)
- **Issues**: [GitHub Issues](https://github.com/kalanadenuz/Save-The-Sea/issues)
- **Discussions**: [GitHub Discussions](https://github.com/kalanadenuz/Save-The-Sea/discussions)

---

<div align="center">

**🌊 Save the Sea. Save the Future. 🌊**

*Every action counts*

Made with ❤️ for our oceans

</div>
