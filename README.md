# Vibe Rodeo - Bolt Template

NOTE: For some reason, this build is not working when running "npm run dev" in Firefox, but it works fine in the Winsurf Chromium browser. I'll figure out why and fix that later. It may be a problem with how Bolt builds it for WebContainer.

![Bolt.new](https://img.shields.io/badge/Created%20with-Bolt.new-black)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)
![Vite](https://img.shields.io/badge/Vite-5.4.8-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.13-cyan)

This project is a template created in the no-code AI editor [bolt.new](https://bolt.new). It provides a modern, responsive web application foundation that can be easily cloned and edited using [Windsurf](https://www.windsurf.io/) and [Cursor](https://cursor.com/).

## Features

- 🚀 Built with React, TypeScript, and Vite
- 🎨 Beautiful dark-themed UI with TailwindCSS
- 📱 Fully responsive design
- 🧩 Component-based architecture
- 🔄 Client-side routing
- 🌓 Theme support

## Structure

The project follows a clean, component-based architecture:

```
vibe-rodeo-bolt/
├── .bolt/                  # Bolt.new configuration 
├── public/                 # Public assets
├── src/                    # Source code
│   ├── components/         # React components
│   │   ├── layout/         # Layout components
│   │   ├── pages/          # Page components
│   │   │   ├── home-page.tsx
│   │   │   ├── features-page.tsx
│   │   │   ├── purchase-page.tsx
│   │   │   ├── news-page.tsx
│   │   │   ├── support-page.tsx
│   │   │   └── dashboard-page.tsx
│   │   ├── sections/       # Section components used within pages
│   │   │   ├── hero-section.tsx
│   │   │   ├── feature-section.tsx
│   │   │   ├── pricing-section.tsx
│   │   │   ├── video-section.tsx
│   │   │   ├── testimonial-section.tsx
│   │   │   └── cta-section.tsx
│   │   ├── ui/             # Reusable UI components
│   │   ├── footer.tsx      # Footer component
│   │   ├── logo.tsx        # Logo component
│   │   └── navbar.tsx      # Navigation bar component
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions and constants
│   │   ├── constants.ts    # Application constants
│   │   ├── theme-provider.tsx # Theme provider component
│   │   └── utils.ts        # Utility functions
│   ├── App.tsx             # Main application component
│   ├── App.css             # Application styles
│   ├── index.css           # Global styles
│   └── main.tsx            # Entry point
├── tailwind.config.js      # TailwindCSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

The application uses a client-side routing approach implemented directly in the `App.tsx` file, handling navigation without dependencies on external routing libraries. Each page is a separate component that gets rendered based on the current URL path.

## Dependencies

### Core Technologies
- **React (18.3.1)**: Frontend library for building user interfaces
- **TypeScript (5.5.3)**: Strongly typed programming language that builds on JavaScript
- **Vite (5.4.8)**: Next-generation frontend build tool

### UI Components and Styling
- **Radix UI**: A comprehensive collection of accessible UI components:
  - Accordion, Alert Dialog, Avatar, Checkbox, Dialog, Dropdown Menu, etc.
- **TailwindCSS (3.4.13)**: Utility-first CSS framework
- **class-variance-authority**: For creating variant styles
- **tailwind-merge**: For merging Tailwind CSS classes
- **tailwindcss-animate**: For animations with Tailwind

### Animation and Interaction
- **Framer Motion**: Animation library for React
- **Embla Carousel**: Carousel component
- **react-intersection-observer**: For intersection observer functionality

### Form Handling and Validation
- **React Hook Form**: Form state management and validation
- **Zod**: TypeScript-first schema validation

### Data Visualization
- **Recharts**: Composable charting library built on React components

### Theming and Notifications
- **next-themes**: Theme management
- **Sonner**: Toast notifications

## Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vibe-rodeo-bolt
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Original Prompt
This prompt was engineered with the help of one of my AI copilots/agents. I will release it soon -- it took a rudimentary prompt and turned it into a hyperoptimized beauty while keeping context usage small.

Prompt for AI Web App Development --- ## 1) HIGH-LEVEL DESCRIPTION

Build a toolkit and dashboard called vibe.rodeo to enhance user experience while “vibe coding” or programming with AI. The application should feel modern, futuristic, and detail-oriented, providing a cutting-edge environment for both beginners and experienced coders.
--- ## 2) LOOK & FEEL

The design should feel like it was crafted by a world-class designer with ultra-clean layouts, luxurious transitions, and modern styling practices. Emphasize glassmorphism, layered gradients, glow effects, and other morphisms to create a futuristic yet usable interface. The result should be bold, sleek, and immersive, reflecting a fully fledged modern but detailed aesthetic.
--- ## 3) BRAND

Use a primarily black background (as the main UI color).
Employ a gradient from a slightly softer red to orange as the secondary color set—elegant and not too harsh.
Typography: Sophisticated (Inter or Geist), regular boldness, -5 letter spacing, and comfortable line heights (e.g., 1.4–1.5).
Maintain a consistent brand identity throughout, pairing black as the background with the red-orange gradient for highlight/secondary elements.

--- ## 4) UI LIBRARY

Leverage ShadCN UI for all components to ensure cohesive styling and easy component management.
--- ## 5) PAGE/COMPONENT DETAILS

Collapsible Navigation:
    Pages: Home, Purchase, Features, News, Support, Dashboard.

Homepage:
    Hero Section: Introduce vibe.rodeo with a striking headline, bold CTA, and background visuals that incorporate black, red glow/gradients, and glassmorphism.
    Description Ribbon: Provide a concise explanation of the toolkit and its benefits for AI-driven coding.
    Feature Card Section: Highlight key functionalities, each displayed in a glassmorphic card with subtle red-orange gradients or glow edges.
    Pricing Card: Showcase possible subscription tiers or one-time purchase options, maintaining the brand’s black-and-red-orange gradient.
    Video Section: Embed or feature an overview video demonstrating vibe.rodeo’s capabilities.
    Fully Featured Footer: Include quick links, social media icons, and essential disclaimers designed in the same futuristic style.

Other Pages:
    Purchase: Dedicated page for transaction/purchase flows, featuring clear pricing and payment integrations.
    Features: Detailed breakdown of all tools and functionalities offered by vibe.rodeo.
    News: Aggregated feed of announcements, updates, or blog posts to keep users informed.
    Support: Resources and user support channels, including FAQs, contact forms, or live chat options.
    Dashboard: User’s personal workspace with robust coding tools, AI prompts, real-time analytics, and a sleek coding environment.

--- ## 6) ADDITIONAL DESIGN DETAILS

Color & Glow: Implement a subtle red glow effect emanating across the homepage. Gradients, glassmorphic assets, and glowing edges should be used extensively but balanced for a cohesive experience.
Advanced CSS & Animation: Integrate advanced CSS properties, blend modes, and filters to enhance visual appeal. Use animation libraries like Framer Motion, GSAP, or Lottie to create dynamic, smooth transitions, micro-interactions, and hover effects.
Consistency & Usability: Although futuristic, ensure that the design remains performant, uncluttered, and easy to navigate on all screen sizes. Maintain a consistent, modern brand style across all pages and UI elements.

--- ## 7) ADDITIONAL CHANGES, REQUESTS, OR SPECIFICATIONS

N/A