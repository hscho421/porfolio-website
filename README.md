# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring smooth animations and a sleek dark theme.

## Tech Stack

- **React 18** with TypeScript
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling with custom dark theme
- **Framer Motion** - Animations and transitions
- **Radix UI** - Accessible UI components
- **Wouter** - Client-side routing

## Features

- Responsive design with mobile-first approach
- Dark theme with neon cyan/purple accents
- Smooth scroll navigation
- Animated typing effects
- Project showcase with GitHub/live links
- Experience timeline
- Skills organized by category
- Contact form

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/hyunseokcho/porfolio-website.git
cd porfolio-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run check` | Run TypeScript type checking |

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/    # React components
│   │   │   └── ui/        # Radix UI wrapper components
│   │   ├── data/          # Portfolio content
│   │   ├── hooks/         # Custom React hooks
│   │   ├── pages/         # Page components
│   │   └── lib/           # Utilities
│   └── public/            # Static assets
├── shared/                # Shared TypeScript types
└── vite.config.ts
```

## Customization

Portfolio content can be edited in `client/src/data/portfolio.ts`:

- **Profile** - Name, headline, bio, social links
- **Experience** - Work history
- **Projects** - Portfolio projects
- **Skills** - Technical skills by category

## License

MIT
