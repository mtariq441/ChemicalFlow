# AF Chemicals Website Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from industrial B2B companies like Siemens, BASF, and Dow Chemical for professional credibility while maintaining modern web aesthetics.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Industrial Blue: 220 25% 25% (main brand color)
- Steel Grey: 210 8% 46% (secondary)
- Clean White: 0 0% 100% (backgrounds)

**Accent Colors:**
- Sustainability Green: 142 69% 58% (eco-friendly elements)
- Alert Orange: 25 95% 53% (CTAs and highlights)

### B. Typography
- **Primary Font**: Inter (Google Fonts) - clean, technical sans-serif
- **Headings**: Font weights 600-700, sizes from text-2xl to text-6xl
- **Body Text**: Font weight 400-500, text-base to text-lg
- **Technical Data**: Font weight 500, smaller sizes for specifications

### C. Layout System
**Tailwind Spacing Units**: Consistent use of 4, 8, 12, 16, 24 units
- Sections: py-16 to py-24
- Component spacing: gap-8, gap-12
- Container margins: mx-4, mx-8
- Grid gaps: gap-6, gap-8

### D. Component Library

**Navigation**: Fixed header with transparent background over hero, solid on scroll
**Hero Section**: Full-viewport height with overlay, large typography, dual CTAs
**Statistics Cards**: Grid layout with large numbers, icons, and descriptions
**Product Cards**: Clean white cards with subtle shadows, hover animations
**Industry Blocks**: Icon + title + description format in responsive grid
**Contact Forms**: Minimal styling with focus states and validation
**Global Map**: Interactive world map with marker points for facilities

### E. Visual Treatments

**Gradients**: Subtle blue-to-grey gradients for section backgrounds
**Overlays**: Dark overlays (opacity-60) over industrial background images
**Shadows**: Minimal drop shadows (shadow-lg) for card elevation
**Borders**: Subtle borders in grey-200 for content separation

## Images

**Hero Image**: Large industrial facility background (steel production or chemical plant) with dark overlay
**Industry Icons**: Simple line icons for Carbon Steel, Stainless Steel, Abrasives, Cement
**Sustainability Graphics**: Green-tinted icons for eco-friendly initiatives
**Global Map**: World map visualization with facility markers
**Product Imagery**: Clean product shots or industrial process images
**Company Photos**: Professional team photos for careers section

## Layout Structure

**Single Page Application** with smooth scrolling navigation:
1. Hero section (full viewport)
2. Company overview with statistics (half viewport)
3. Products overview with benefits grid
4. Industries served (4-column responsive grid)
5. Global reach with interactive map
6. Sustainability showcase
7. Contact section with form

**Responsive Design**: Mobile-first approach with breakpoints at sm, md, lg, xl
**Grid Systems**: CSS Grid for complex layouts, Flexbox for component alignment
**Content Width**: Max-width containers (max-w-7xl) with appropriate padding

## Interactive Elements

**Buttons**: Primary (filled blue), Secondary (outline), CTA (orange accent)
**Hover States**: Subtle scale transforms and color transitions
**Form Inputs**: Clean borders with focus states in brand blue
**Navigation**: Smooth scroll to sections with active state indicators
**Cards**: Gentle hover elevation and subtle transitions

This design system creates a professional, trustworthy appearance suitable for B2B chemical industry while maintaining modern web standards and user experience principles.