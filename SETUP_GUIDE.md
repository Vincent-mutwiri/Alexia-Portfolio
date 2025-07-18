# Alexia Sahara Portfolio Website - Setup Guide

This is a complete portfolio website for Alexia Sahara built with React, TypeScript, Vite, Tailwind CSS, and Shadcn/UI.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 18 or higher)
- PNPM (recommended) or npm

### Installation Commands

1. **Clone or extract the project files**
2. **Navigate to the project directory:**
   ```bash
   cd alexia-portfolio
   ```

3. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   ```

4. **Start the development server:**
   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

5. **Open your browser and visit:**
   ```
   http://localhost:5173
   ```

## 🛠️ Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build
- `pnpm run lint` - Run ESLint

## 🎨 Design Features

### Color Scheme
- **Primary Color**: Maroon (#8B1538)
- **Secondary Color**: Navy Blue (#1E3A8A)
- **Background**: White/Dark mode compatible
- **Accent**: Maroon variations

### Components Included
- ✅ Responsive header with navigation
- ✅ Hero section with call-to-action buttons
- ✅ About section with detailed bio
- ✅ Professional experience timeline
- ✅ Key projects showcase
- ✅ Speaking & training presentations
- ✅ Contact form with validation
- ✅ Footer with quick links
- ✅ Dark/Light mode toggle
- ✅ Mobile-responsive design
- ✅ Smooth scrolling navigation

## 📁 Project Structure

```
alexia-portfolio/
├── public/
│   ├── alexia_sahara_cv.pdf     # CV file (placeholder)
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── alexia-headshot.jpg  # Profile photo (placeholder)
│   ├── components/
│   │   ├── ui/                  # Shadcn/UI components
│   │   ├── ContactSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ModeToggle.tsx
│   │   ├── PresentationsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── Seo.tsx
│   │   └── ThemeProvider.tsx
│   ├── data/
│   │   ├── experience.json      # Professional experience data
│   │   ├── presentations.json   # Speaking engagements data
│   │   └── projects.json        # Key projects data
│   ├── pages/
│   │   └── HomePage.tsx
│   ├── App.css                  # Custom styles and theme variables
│   ├── App.tsx                  # Main application component
│   ├── index.css                # Global styles
│   └── main.tsx                 # Application entry point
├── components.json              # Shadcn/UI configuration
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.js
```

## 🔧 Customization

### Adding Your Own Content

1. **Replace placeholder images:**
   - Add your professional headshot to `src/assets/alexia-headshot.jpg`
   - Add your CV file to `public/alexia_sahara_cv.pdf`

2. **Update data files:**
   - Edit `src/data/experience.json` for work history
   - Edit `src/data/projects.json` for key projects
   - Edit `src/data/presentations.json` for speaking engagements

3. **Customize contact information:**
   - Update email, phone, and LinkedIn in `src/components/ContactSection.tsx`
   - Update footer contact details in `src/components/Footer.tsx`

4. **Modify colors:**
   - Edit CSS variables in `src/App.css` under `:root` and `.dark` sections

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/pages/HomePage.tsx`
3. Add navigation link in `src/components/Header.tsx`

## 🌐 Deployment

### Build for Production
```bash
pnpm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deployment Options
- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions
- **Any static hosting**: Upload the `dist` folder contents

## 📱 Mobile Responsiveness

The website is fully responsive and includes:
- Mobile-first design approach
- Hamburger menu for mobile navigation
- Touch-friendly buttons and links
- Optimized typography for all screen sizes
- Responsive grid layouts

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast color ratios
- Screen reader friendly

## 🔍 SEO Optimization

- Meta tags for search engines
- Open Graph tags for social sharing
- Structured data markup
- Semantic HTML elements
- Fast loading performance

## 🎯 Key Features

1. **Single Page Application**: Smooth navigation without page reloads
2. **Data-Driven**: All content stored in JSON files for easy updates
3. **Theme Support**: Light/Dark mode with system preference detection
4. **Modern Stack**: Built with latest React, TypeScript, and Vite
5. **Professional Design**: Clean, modern layout optimized for professional portfolios
6. **Performance Optimized**: Fast loading with code splitting and optimization

## 📞 Support

For any questions or customization needs, refer to the documentation of the individual technologies:
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Shadcn/UI Documentation](https://ui.shadcn.com/)

---

**Built with ❤️ for Alexia Sahara's professional portfolio**

