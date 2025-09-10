# Site Reduction & Consolidation Plan

## Current State Analysis

**Total Pages**: 20 pages identified via sitemap.xml
**Content Duplication**: High - Multiple service area pages with similar content
**SEO Issues**: Content cannibalization across similar pages
**Technical Debt**: WordPress-specific assets and plugins

## Consolidation Strategy

### Page Reduction Plan (20 → 8 pages)

1. **Homepage** (`/`) - Keep as main landing page
2. **Services** (`/services/`) - Consolidated services page replacing:
   - `/house-cleaning/`
   - `/apartment-cleaning/`
   - `/office-cleaning/`
   - `/move-in-cleaning/`
   - `/move-out-cleaning/`
   - `/post-construction-cleaning/`

3. **Service Areas** (`/service-areas/`) - Consolidated location page replacing:
   - `/cleaning-service-wyckoff-nj/`
   - `/cleaning-service-ridgewood-nj/`
   - `/cleaning-service-hawthorne-nj/`
   - `/cleaning-service-garfield-nj/`
   - All `/service-area-house-cleaning-*/` pages

4. **Blog** (`/blog/`) - Keep blog content
5. **Contact** (`/contact/`) - Keep contact page
6. **Thank You** (`/thank-you/`) - Keep conversion page

### Content Restructuring

#### Services Page Content Organization
- **Residential Cleaning** (House, Apartment)
- **Commercial Cleaning** (Office)
- **Specialty Cleaning** (Move-in/out, Post-construction)

#### Service Areas Page Organization
- **Wyckoff, NJ** section
- **Ridgewood, NJ** section
- **Hawthorne, NJ** section
- **Garfield, NJ** section
- **All Service Areas** overview

### SEO Optimization

1. **Canonical URLs**: Set proper canonical tags to avoid duplicate content
2. **Internal Linking**: Improve navigation between consolidated pages
3. **Meta Descriptions**: Create unique, compelling meta descriptions for each page
4. **Heading Structure**: Implement proper H1-H6 hierarchy
5. **Structured Data**: Add JSON-LD for local business and service areas

### Third-Party Asset Replacement

**Remove:**
- Google Tag Manager (replace with simple analytics if needed)
- Rank Math SEO plugin dependencies
- WordPress-specific classes and structures

**Keep:**
- Essential business information
- Contact details
- Service descriptions
- Testimonials/reviews

### Technical Implementation

1. **React Components**: Create reusable service cards, location sections
2. **Content Management**: Use MDX files for easy content updates
3. **Image Optimization**: Compress and optimize all images
4. **Performance**: Target 90+ Lighthouse scores
5. **Accessibility**: Ensure WCAG 2.1 AA compliance

### Migration Timeline

**Phase 1**: Content extraction and analysis (Current)
**Phase 2**: MDX content creation and component development
**Phase 3**: React application setup and styling
**Phase 4**: SEO optimization and performance testing
**Phase 5**: Deployment and redirect setup

### Expected Benefits

- **75% reduction** in page count (20 → 5 main pages)
- **Improved SEO** through content consolidation
- **Better user experience** with simplified navigation
- **Faster loading** through optimized assets
- **Easier maintenance** with React/MDX structure
- **Reduced technical debt** by removing WordPress dependencies

### Risk Mitigation

1. **301 Redirects**: Set up proper redirects from old URLs to new pages
2. **SEO Monitoring**: Track rankings during and after migration
3. **Content Preservation**: Ensure all valuable content is migrated
4. **Testing**: Comprehensive testing across devices and browsers
