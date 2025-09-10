# Assets Directory Structure

This directory contains all static assets for the DR General Cleaning website, organized for optimal performance and maintainability.

## Directory Structure

### 📁 images/
**Hero Images** (`images/hero/`)
- Large banner images for homepage and landing pages
- High-resolution photos showcasing cleaning services
- Optimized for web (WebP format recommended)

**Service Images** (`images/services/`)
- Photos specific to each cleaning service
- Residential, commercial, move-in/out, etc.
- Before/after comparison shots

**Team Photos** (`images/team/`)
- Staff portraits and team photos
- Professional headshots
- Group photos for about page

**Testimonials** (`images/testimonials/`)
- Client photos (with permission)
- Customer headshots for reviews
- Location-specific client images

**Before/After** (`images/before-after/`)
- Comparison photos showing cleaning results
- Side-by-side transformations
- Quality demonstration images

**Icons** (`images/icons/`)
- Service icons (cleaning, vacuum, mop, etc.)
- UI icons for website elements
- Social media icons

### 📁 logos/
**Favicon** (`logos/favicon/`)
- Browser tab icons (multiple sizes)
- Apple touch icons
- Android home screen icons

**Header Logo** (`logos/header/`)
- Main website logo (light and dark variants)
- Optimized for navigation bar
- SVG format preferred

**Footer Logo** (`logos/footer/`)
- Secondary logo for footer
- Simplified version if needed
- Monochrome variants

### 📁 fonts/
- Custom web fonts (WOFF2, WOFF, TTF)
- Font licensing documentation
- Fallback font specifications

### 📁 css/
- Custom stylesheets
- Vendor CSS files
- Minified production CSS

### 📁 js/
- Custom JavaScript files
- Vendor libraries
- Minified production JS

### 📁 videos/
- Promotional videos
- Service demonstration videos
- Customer testimonial videos
- Optimized for web (MP4, WebM)

## File Naming Convention

Use descriptive, lowercase names with hyphens:
- `hero-homepage-cleaning-service.jpg`
- `service-residential-deep-clean.webp`
- `team-john-smith-headshot.jpg`
- `logo-dr-general-cleaning.svg`

## Optimization Guidelines

1. **Images**: Use WebP format when possible, optimize with 80% quality
2. **Videos**: Compress to reasonable file sizes, use modern codecs
3. **Icons**: SVG format preferred for scalability
4. **Fonts**: WOFF2 format for best compression

## Usage Examples

```html
<!-- Hero image -->
<img src="assets/images/hero/homepage-banner.webp" alt="Professional cleaning service">

<!-- Service icon -->
<img src="assets/images/icons/vacuum-cleaner.svg" alt="Vacuum cleaning service">

<!-- Logo -->
<img src="assets/logos/header/logo-main.svg" alt="DR General Cleaning">
```

## Maintenance

- Regularly optimize and compress assets
- Keep file structure organized
- Document any third-party assets with licenses
- Update this README when adding new asset types
