import os, json
from datetime import datetime
def generate_sitemap():
    base_url = os.getenv('BASE_URL', 'https://example.com')
    entries = os.getenv('SITEMAP_ENTRIES')
    try:
        urls = json.loads(entries) if entries else []
    except Exception:
        urls = []
    # always include index page
    urls.insert(0, {'loc': f"{base_url}/", 'lastmod': datetime.utcnow().date().isoformat()})
    lines = ['<?xml version="1.0" encoding="UTF-8"?>',
             '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for u in urls:
        lines.append('  <url>')
        lines.append(f"    <loc>{u['loc']}</loc>")
        lines.append(f"    <lastmod>{u.get('lastmod', datetime.utcnow().date().isoformat())}</lastmod>")
        lines.append('  </url>')
    lines.append('</urlset>')
    content = '\n'.join(lines) + '\n'
    out_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'frontend', 'public', 'sitemap.xml'))
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, 'w') as f:
        f.write(content)
