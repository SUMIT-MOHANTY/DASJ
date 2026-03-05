# Books Management


## Fallback Routing

A custom **404 Not Found** page has been added to improve user experience for unknown routes.

- **File:** `404.html` - Friendly HTML page with branding "Books Management - Page Not Found".
- **CSS:** `css/404.css` - Minimal styling for a centered, readable layout.
- **Configuration:** Updated `staticwebapp.config.json` (or `azure-storage-config.json`) to include a
  `navigationFallback` entry that rewrites any unmatched request to `404.html`.
- **Git Tag:** `fallback-404`
