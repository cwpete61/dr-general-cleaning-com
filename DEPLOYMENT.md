# Deployment Setup for DR General Cleaning

## Automatic Deployments with Coolify

This project is set up for automatic deployments using Coolify. Here's how to configure it:

### GitHub Actions Workflow
- A GitHub Actions workflow (`.github/workflows/deploy.yml`) is configured
- It runs on every push to the `master` branch
- Currently validates HTML files and provides deployment instructions

### Coolify Setup Instructions

1. **Install Coolify** on your server if not already installed
2. **Connect GitHub Repository** in Coolify dashboard
3. **Configure Webhook** in Coolify to trigger on push events
4. **Set up GitHub Webhook** (alternative method):
   - Go to GitHub Settings → Webhooks → Add webhook
   - Payload URL: Your Coolify webhook endpoint
   - Content type: `application/json`
   - Which events: Just the push event
   - Secret: Your webhook secret from Coolify

### Manual Deployment
For manual deployments, you can use:

```bash
# Clone the repository
git clone https://github.com/cwpete61/dr-general-cleaning-com.git

# The site is static HTML - just serve the files
python -m http.server 8000
```

### Production Deployment
The website consists of static HTML files that can be served by any web server:
- Apache
- Nginx
- Netlify
- Vercel
- GitHub Pages
- Any static file hosting service

### Environment Setup
No build process is needed - this is a pure HTML/CSS/JavaScript static website.

## File Structure
```
dr-general-cleaning-com/
├── index.html          # Main homepage
├── blog.html          # Blog page
├── privacy.html       # Privacy policy
├── terms.html         # Terms of service
├── assets/            # All static assets
│   ├── logos/         # Brand logos
│   ├── images/        # Website images
│   ├── css/           # CSS files
│   ├── js/            # JavaScript files
│   └── fonts/         # Font files
└── blog/              # Blog articles
```

## Notes
- The site uses Tailwind CSS via CDN
- No database or server-side processing required
- All content is static and can be cached aggressively
- Perfect for CDN distribution
