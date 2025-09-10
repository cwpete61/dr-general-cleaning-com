# Third-Party Assets Analysis

## WordPress-Specific Assets to Remove

### Tracking & Analytics
- **Google Tag Manager** (`gtm4wp.com`)
  - Scripts with `data-cfasync="false" data-pagespeed-no-defer`
  - Data layer initialization code
  - Replace with simple analytics solution if needed

### SEO Plugins
- **Rank Math SEO Plugin**
  - JSON-LD structured data generation
  - Meta tag generation
  - Sitemap generation functionality
  - Replace with manual SEO implementation

### WordPress Core Dependencies
- **WordPress Emoji Support**
- **WP Embed functionality**
- **Admin bar references**
- **WP-specific CSS classes and IDs**

### External Dependencies
- **Google Fonts** (if used)
- **Font Awesome** (if used)
- **jQuery** (if used)
- **Other WordPress theme dependencies**

## Assets to Keep/Migrate

### Business Information
- **Company details**: Name, address, phone, email
- **Service descriptions** and pricing information
- **Testimonials** and reviews
- **Team information** (if any)
- **Service area coverage**

### Media Assets
- **Company logo**: `/wp-content/uploads/2025/03/download-83.png`
- **Service images**: Various cleaning service photos
- **Icon assets**: SVG icons used throughout the site
- **Background images**: Hero section and decorative images

### Content Assets
- **Blog posts** and articles
- **FAQ content** (to be extracted from pages)
- **Service descriptions** with detailed information
- **Contact information** and forms

## Replacement Strategy

### Tracking & Analytics
**Remove**: Complex GTM implementation
**Replace with**: Simple analytics script or privacy-focused alternative

### SEO Implementation
**Remove**: Rank Math plugin dependencies
**Replace with**: Manual meta tags and JSON-LD implementation
- Custom Open Graph tags
- Twitter Card meta tags
- Schema.org structured data
- Manual sitemap generation

### Styling & Design
**Remove**: WordPress theme-specific CSS
**Replace with**:
- Tailwind CSS for styling
- Custom component library
- Responsive design system

### Functionality
**Remove**: WordPress plugins and shortcodes
**Replace with**:
- React components for dynamic functionality
- Form handling with Formspree or similar
- Client-side routing with React Router

## Technical Debt Reduction

### Code Cleanup
- Remove WordPress PHP templates
- Eliminate plugin-specific shortcodes
- Clean up legacy CSS and JavaScript
- Remove unused media assets

### Performance Optimization
- Optimize images for web
- Implement lazy loading
- Minimize CSS and JavaScript
- Implement proper caching strategies

### Security Improvements
- Remove WordPress-specific vulnerabilities
- Implement modern security headers
- Secure form handling
- HTTPS enforcement

## Migration Checklist

- [ ] Audit all third-party scripts
- [ ] Identify essential business assets to keep
- [ ] Plan replacement strategy for each dependency
- [ ] Implement modern alternatives
- [ ] Test functionality after migration
- [ ] Monitor performance improvements
- [ ] Verify SEO preservation
