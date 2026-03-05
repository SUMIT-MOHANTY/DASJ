import os
def generate_robots():
    content = "User-agent: *\nDisallow: /\n"
    out_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'frontend', 'public', 'robots.txt'))
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, 'w') as f:
        f.write(content)
