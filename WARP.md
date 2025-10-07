# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Pentagon Esports Website is a minimalistic, modern esports team website built with vanilla HTML, CSS, and JavaScript. It features responsive design, smooth animations, and an esports-themed aesthetic with pentagon-shaped visual elements and gaming-focused color schemes.

## Development Commands

### Start Development Server
```bash
python server.py
```
- Automatically opens browser at http://localhost:8000
- Includes live reload capabilities and CORS headers for development

### Server Options
```bash
# Specific port
python server.py -p 3000

# No auto-browser opening
python server.py --no-browser

# Allow network access (for testing on other devices)
python server.py --host 0.0.0.0

# Help and all options
python server.py --help
```

### File Serving
Simply open `index.html` in a browser for basic viewing, though the Python server is recommended for proper development with CORS and optimal performance.

## Architecture & Code Structure

### Core Architecture
- **Static Site**: Pure HTML/CSS/JS with no build process or dependencies
- **Single Page Application**: All content in `index.html` with smooth scrolling navigation
- **Modular CSS**: Organized by component sections (navigation, hero, team, matches, etc.)
- **Progressive Enhancement**: JavaScript adds interactions on top of functional HTML/CSS base

### Key Technical Implementations

#### Pentagon Shape Animation
- Uses CSS `clip-path: polygon()` to create the pentagon shape
- Dual animations: continuous rotation (20s) and pulsing scale effect (4s)
- Located in `.pentagon-shape` class with gradient backgrounds

#### Performance Optimizations
- **Intersection Observer API**: For scroll-triggered animations on team/match/achievement cards
- **Hardware-accelerated animations**: Uses `transform` and `opacity` for smooth performance
- **Efficient event handling**: Debounced scroll events and optimized selectors

#### Responsive Design Strategy
- **CSS Grid**: Auto-fitting layouts (`repeat(auto-fit, minmax())`)
- **Flexbox**: Navigation and button layouts
- **Mobile-first considerations**: Hamburger menu, touch-friendly interactions

### JavaScript Architecture
- **Event-driven**: All interactions handled through event listeners
- **DOM-ready pattern**: Code wrapped in `DOMContentLoaded` for reliable execution
- **Modular functions**: Separate concerns (navigation, animations, effects)
- **Progressive enhancement**: Graceful degradation if JavaScript fails

### CSS Organization
1. **Reset & Base**: Global styles and normalization
2. **Layout Components**: Navigation, containers, grid systems
3. **Section Styles**: Hero, team, matches, achievements, contact
4. **Interactive Elements**: Buttons, hover effects, animations
5. **Responsive Breakpoints**: Media queries for mobile adaptation

## Color Scheme & Design System

### Primary Colors
- **Accent Green**: `#00ff88` - Primary brand color, used for highlights and CTA elements
- **Blue**: `#0066ff` - Secondary accent, used in gradients and hover states  
- **Pink/Red**: `#ff0066` - Tertiary accent for gradients and error states
- **Background**: `linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)`

### Typography
- **Headers**: 'Orbitron' (futuristic gaming font) - used for titles and branding
- **Body**: 'Roboto' (clean readable) - used for content and UI text

## Content Customization

### Team Information
Team member details are hardcoded in `index.html` lines 59-98. Each member card includes:
- Avatar placeholder (lines can be replaced with actual images)
- Name, role, and games played
- Structured in `.team-member` components

### Match History  
Match data in lines 108-143 of `index.html`. Each match includes:
- Date, status (win/loss), team names, scores, tournament/game info
- Status styling automatically applies win/loss colors

### Achievements
Trophy/achievement cards in lines 153-167, featuring:
- Emoji icons (easily customizable)
- Achievement titles and descriptions
- Responsive grid layout

## Animation System

### Scroll-Based Animations
- **Intersection Observer**: Triggers `.animate-in` class for fade-in effects
- **Parallax**: Pentagon shape moves/rotates based on scroll position
- **Navbar**: Background opacity changes on scroll

### Interactive Animations
- **Hover Effects**: All interactive elements have transform-based hover states
- **Typing Effect**: Hero subtitle uses character-by-character typing animation
- **Particle System**: Floating particles generated in hero section

### Performance Notes
- All animations use CSS transforms for hardware acceleration
- JavaScript animations are optimized with `setTimeout` and `requestAnimationFrame` patterns
- Particles are automatically cleaned up to prevent memory leaks

## Deployment

### Static Hosting (Recommended)
The site is optimized for static hosting services:
- **Netlify/Vercel**: Direct drag-and-drop deployment
- **GitHub Pages**: Works with repository hosting
- **Traditional hosting**: Upload all files to web root directory

### Production Checklist
1. Replace placeholder team member images in `/assets/` (prepare folder structure)
2. Update contact information and social media links  
3. Customize team data, match history, and achievements
4. Test across browsers (Chrome, Firefox, Safari, Edge)
5. Verify mobile responsiveness on actual devices

## Browser Compatibility
- **Modern browsers**: Full feature support (Chrome, Firefox, Safari, Edge)
- **CSS Grid/Flexbox**: Required for layout
- **ES6+ JavaScript**: Uses modern APIs (Intersection Observer, arrow functions)
- **Fallbacks**: Smooth scrolling has CSS and JS implementation