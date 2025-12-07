# Abdelrahman Balhaj Advocates & Legal Consultants Website

A premium, high-performance legal consultancy website designed with a "Dubai Luxury" aesthetic. This project combines modern web technologies with a sophisticated design language to establish digital authority for Dr. Abdelrahman Balhaj's firm.

## 🌟 Project Overview

This website serves as the digital headquarters for a premier law firm in Abu Dhabi. It features a dark, gold-accented color palette, smooth animations, and AI-powered content generation features.

**Key Design Elements:**
- **Luxury Aesthetic:** Black & Gold color scheme, elegant serif typography (Cinzel, Playfair Display), and subtle geometric patterns.
- **Editorial Layout:** High-impact hero section with split-screen design and glass-morphism effects.
- **Interactive Elements:** Smooth scrolling, animated counters, hover effects, and mobile-responsive navigation.

## 🚀 Tech Stack

- **Framework:** React 18 (via Create React App structure)
- **Styling:** Tailwind CSS (Custom config for luxury colors/fonts)
- **Icons:** Lucide React
- **AI Integration:** Google GenAI SDK (`@google/genai`) for dynamic content enhancement.
- **Language:** TypeScript

## ✨ Key Features

1.  **Editorial Hero Section:** Features a stunning Dubai skyline background, animated typography, and a floating glass card for trust signals.
2.  **AI Content Enhancement:** The "About Us" section integrates with Gemini models to dynamically rewrite or translate text into Arabic/English.
3.  **Practice Areas:** Detailed grid layout showcasing legal expertise.
4.  **Testimonials:** Client quotes with social sharing functionality (Web Share API).
5.  **Interactive Stats:** Numbers that animate up when scrolled into view.
6.  **SEO Optimized:** Semantic HTML, meta tags, and Open Graph data.
7.  **Fully Responsive:** optimized for mobile, tablet, and desktop viewing.

## 🛠️ Project Structure

```bash
├── components/          # React components
│   ├── Hero.tsx         # Landing page section
│   ├── Navbar.tsx       # Responsive navigation
│   ├── AboutSection.tsx # AI-integrated about section
│   ├── Pattern.tsx      # SVG Background patterns
│   └── ...              # Other sections (Stats, Services, Footer, etc.)
├── services/
│   └── geminiService.ts # Google GenAI API integration
├── types.ts             # TypeScript interfaces
├── App.tsx              # Main application layout
├── index.tsx            # Entry point
└── metadata.json        # Project metadata
```

## ⚡ Setup & Installation

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Environment Setup:**
    Ensure you have a valid Google Gemini API Key.
    The app expects `process.env.API_KEY` to be available.

3.  **Run Development Server:**
    ```bash
    npm start
    ```

4.  **Build for Production:**
    ```bash
    npm run build
    ```

## 🎨 Customization

### Color Palette (Tailwind Config)
- **Gold:** Custom shades from `#FBF7E8` (50) to `#2A230B` (900).
- **Luxury Black:** `#050505` (Deepest black) and `#0F0F0F` (Charcoal).

### Fonts
- **Serif:** Cinzel (Headers) & Playfair Display (Editorial text)
- **Sans:** Inter (Body text)

## 📝 License

Proprietary software developed for Abdelrahman Balhaj Advocates.
