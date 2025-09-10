# DR General Cleaning Landing Page - Maintenance Guide

This guide will help you maintain and customize the DR General Cleaning landing page. Whether you're new to web development or need a quick reference, follow these detailed instructions for common updates.

## Table of Contents
1. [Updating Text and Styling](#updating-text-and-styling)
2. [Managing Links](#managing-links)
3. [Adding Privacy and Terms Pages](#adding-privacy-and-terms-pages)
4. [Troubleshooting](#troubleshooting)

## Updating Text and Styling

### Header Section
The header contains the company name and navigation menu. To update:

1. **Company Name:**
```html
<div class="text-2xl font-bold text-blue-600">
    DR General Cleaning  <!-- Update this text -->
</div>
```

2. **Navigation Menu Items:**
```html
<div class="hidden md:flex space-x-8">
    <a href="#home">Home</a>  <!-- Update menu item text here -->
    <a href="#features">Features</a>
    <a href="#benefits">Benefits</a>
    <a href="#contact">Contact</a>
</div>
```

### Hero Section
Located at the top of the page, featuring the main headline and call-to-action buttons:

1. **Main Headline:**
```html
<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
    Experience a complete transformation of your living space  <!-- Update headline here -->
</h1>
```

2. **Subheading:**
```html
<p class="text-xl text-gray-600 leading-relaxed">
    Professional cleaning services that prioritize your health and comfort  <!-- Update subheading -->
</p>
```

### Understanding Tailwind Classes
Common classes used in this landing page:

- Text sizes: `text-xl`, `text-2xl`, `text-3xl`, etc.
- Colors: `text-blue-600`, `bg-white`, `text-gray-900`
- Spacing: `px-6` (padding left/right), `py-4` (padding top/bottom), `mt-12` (margin top)
- Responsive design: `md:text-5xl` (applies at medium screens and up)

To modify styles:
1. Find the element you want to change
2. Locate its class attribute
3. Add or replace Tailwind classes as needed

Example:
```html
<!-- Original -->
<button class="text-xl text-blue-600">

<!-- Making text larger and changing color to red -->
<button class="text-2xl text-red-600">
```

## Managing Links

### Navigation Links
The page uses both internal anchor links and external links:

1. **Internal Links (Scroll to Section):**
```html
<a href="#home">Home</a>
<a href="#features">Features</a>
<a href="#benefits">Benefits</a>
<a href="#contact">Contact</a>
```
To update, ensure the href matches the id of the target section.

2. **External Links:**
```html
<!-- Book Now button -->
<a href="https://drgeneralcleaning.com" class="inline-block px-8 py-4 bg-blue-600">
    Book Now
</a>
```
Replace the URL with your actual booking page link.

3. **Email Links:**
```html
<a href="mailto:support@drgeneralcleaning.com">
    support@drgeneralcleaning.com
</a>
```
Update with your actual email address.

## Adding Privacy and Terms Pages

Add privacy and terms links to the footer section:

1. Locate the footer's Quick Links section:
```html
<div>
    <h4 class="text-xl font-semibold mb-6">Quick Links</h4>
    <ul class="space-y-4">
        <!-- Add new links here -->
        <li><a href="privacy.html" class="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
        <li><a href="terms.html" class="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a></li>
    </ul>
</div>
```

2. Create matching privacy.html and terms.html files in the same directory
3. Ensure consistent styling with existing links

## Troubleshooting

Common issues and solutions:

### Links Not Working
- Check that href attributes match section IDs exactly
- Verify that external URLs include "https://"
- Ensure email links start with "mailto:"

### Responsive Design Issues
- Test the page at different screen sizes
- Check that `md:` and `lg:` prefixed classes are working
- Verify the viewport meta tag is present:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Style Changes Not Applying
- Confirm Tailwind CSS is properly loaded
- Check for conflicting classes
- Verify class names are spelled correctly
- Ensure the CDN link is working:
```html
<script src="https://cdn.tailwindcss.com"></script>
```

For additional help:
- Consult the [Tailwind CSS documentation](https://tailwindcss.com/docs)
- Use browser developer tools to inspect elements
- Test changes in a development environment before deploying

Remember to always backup your files before making significant changes, and test thoroughly across different devices and browsers.