# Game Developer Portfolio Website

## Overview

This is a professional game developer portfolio website built for Shayaan Iqbal, a Senior Unity Developer with 3.5+ years of experience in mobile game development. The site features a vibrant retro arcade aesthetic with neon colors, pixel art elements, and interactive components including a playable mini-game. The portfolio showcases professional experience, technical skills, completed projects, and provides a contact form for potential opportunities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and modern component development
- **Styling**: Tailwind CSS with custom neon color schemes and pixel-art inspired design system
- **Component Library**: Radix UI primitives for accessible, unstyled components
- **Animations**: Framer Motion for smooth transitions and interactive effects
- **State Management**: React hooks for local state, TanStack Query for server state
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

### Backend Architecture  
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful endpoints with proper error handling and validation
- **Development Setup**: Vite for fast development with HMR (Hot Module Replacement)
- **Build Process**: ESBuild for production bundling with code splitting

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Drizzle Kit for database migrations and schema synchronization
- **Temporary Storage**: In-memory storage implementation for development/demo purposes
- **Database Provider**: Configured for Neon Database (serverless PostgreSQL)

### Design System
- **Theme**: Dark mode with neon accent colors (purple, blue, pink, cyan)
- **Typography**: Press Start 2P for arcade-style headings, Inter for body text
- **Visual Effects**: Custom CSS classes for neon glow effects, pixel corners, and scan lines
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: Proper ARIA labels, keyboard navigation, and screen reader support

### Interactive Features
- **Mini-Game**: Custom Flappy Bird-style game built with HTML5 Canvas
- **Contact Form**: Validated contact form with success/error feedback
- **Smooth Scrolling**: Anchor-based navigation with smooth scroll behavior
- **Animated Elements**: Intersection Observer API for scroll-triggered animations

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18 with React DOM for component rendering
- **TypeScript**: Full TypeScript support across frontend and backend
- **Vite**: Modern build tool with optimized development experience

### UI Component Libraries
- **Radix UI**: Comprehensive set of accessible UI primitives including dialogs, dropdowns, forms, and navigation components
- **Framer Motion**: Animation library for smooth transitions and interactive effects
- **Lucide React**: Modern icon library for consistent iconography

### Styling and Design
- **Tailwind CSS**: Utility-first CSS framework with Vite plugin
- **Class Variance Authority**: Type-safe variant API for component styling
- **Tailwind Merge**: Utility for merging Tailwind CSS classes intelligently

### Backend Services
- **Express.js**: Web application framework for Node.js
- **Drizzle ORM**: TypeScript ORM with PostgreSQL dialect
- **Neon Database**: Serverless PostgreSQL database provider
- **Zod**: Runtime type validation for API endpoints and forms

### Development Tools
- **ESBuild**: Fast JavaScript bundler for production builds
- **TSX**: TypeScript execution environment for development
- **PostCSS**: CSS processing with Autoprefixer for browser compatibility

### Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Hookform Resolvers**: Integration between React Hook Form and validation libraries
- **Zod**: Schema validation for both client and server-side validation

### Query Management
- **TanStack Query**: Powerful data fetching and caching library for API interactions
- **Custom API Client**: Type-safe fetch wrapper with error handling and authentication support