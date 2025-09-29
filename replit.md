# AF Chemicals Website - Business B2B Chemical Company

## Overview

AF Chemicals is a modern B2B industrial website for a global chemical company specializing in fluoride-based solutions. The platform showcases their products, services, and global reach to industrial clients in steel, cement, and abrasives industries. Built as a single-page application with React, the site emphasizes professional credibility while maintaining modern web aesthetics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with custom design system based on industrial B2B aesthetics
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessibility and consistency

### Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Storage Interface**: Modular storage system with in-memory implementation (ready for database integration)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot module replacement and error overlay for development experience

### Design System
- **Component Library**: Custom industrial-themed components with shadcn/ui base
- **Color Palette**: Professional industrial colors (blues, greys) with sustainability green and alert orange accents
- **Typography**: Inter font family for clean, technical appearance
- **Layout**: Responsive grid system with consistent spacing units
- **Visual Treatment**: Subtle shadows, gradients, and hover animations for modern B2B aesthetic

### Data Architecture
- **Database**: PostgreSQL with Drizzle schema definitions
- **Schema**: User management system with extensible structure
- **Migrations**: Drizzle Kit for database schema migrations
- **Validation**: Zod schemas for runtime type validation and data integrity

### Development Architecture
- **Monorepo Structure**: Client, server, and shared code organization
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared utilities
- **Asset Management**: Vite asset handling with path aliases for clean imports
- **Error Handling**: Runtime error overlay and structured error responses

## External Dependencies

### Core Framework Dependencies
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight routing library for single-page navigation
- **drizzle-orm**: Type-safe database ORM with PostgreSQL support
- **@neondatabase/serverless**: Serverless PostgreSQL database driver

### UI and Design Dependencies
- **@radix-ui/***: Comprehensive set of accessible UI primitives for components
- **tailwindcss**: Utility-first CSS framework for responsive design
- **class-variance-authority**: Component variant management for design consistency
- **clsx**: Conditional CSS class utility
- **lucide-react**: Icon library with industrial-appropriate icons

### Development Dependencies
- **vite**: Modern build tool with hot module replacement
- **typescript**: Static type checking across the application
- **@replit/vite-plugin-***: Replit-specific development tools and error handling
- **drizzle-kit**: Database schema management and migration tools

### Form and Validation
- **react-hook-form**: Performant form management with minimal re-renders
- **@hookform/resolvers**: Integration between React Hook Form and validation libraries
- **zod**: Runtime type validation and schema definition

### Additional Utilities
- **date-fns**: Date manipulation and formatting utilities
- **embla-carousel-react**: Carousel component for image galleries
- **cmdk**: Command palette implementation for enhanced UX