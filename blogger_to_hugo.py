#!/usr/bin/env python3
"""
blogger_to_hugo.py  (v2 — updated for Blogger 2018 export format)
------------------------------------------------------------------
Converts feed.atom (Blogger content export) to Hugo markdown posts.

Usage:
    python3 blogger_to_hugo.py feed.atom ./content/posts/
"""

import xml.etree.ElementTree as ET
import os, re, sys, html
from datetime import datetime, timezone

# Namespaces used in the 2018 Blogger export format
ATOM     = 'http://www.w3.org/2005/Atom'
BLOGGER  = 'http://schemas.google.com/blogger/2018'

# Map Blogger label names → Hugo category names (must match hugo.toml)
CATEGORY_MAP = {
    'General Concepts':      'General-Concepts',
    'General-Concept':       'General-Concepts',
    'Pre-PnR':               'Pre-PnR',
    'Floorplan':             'Floorplan',
    'Power-Plan':            'Power-Plan',
    'Power Plan':            'Power-Plan',
    'Placement':             'Placement',
    'CTS':                   'CTS',
    'Routing':               'Routing',
    'ECO':                   'ECO',
    'STA':                   'STA',
    'Signal-Integrity':      'Signal-Integrity',
    'SI':                    'Signal-Integrity',
    'Physical-Verification': 'Physical-Verification',
    'PV':                    'Physical-Verification',
}

def slugify(text):
    text = text.lower().strip()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_]+', '-', text)
    text = re.sub(r'-+', '-', text)
    return text[:80].rstrip('-')

def tag(ns, local):
    """Build Clark-notation tag string."""
    return f'{{{ns}}}{local}'

def convert(xml_path, output_dir):
    os.makedirs(output_dir, exist_ok=True)

    tree = ET.parse(xml_path)
    root = tree.getroot()

    posts_converted = 0
    skipped_comments = 0
    skipped_drafts   = 0

    for entry in root.findall(tag(ATOM, 'entry')):

        # Only process entries where blogger:type == POST
        btype = entry.find(tag(BLOGGER, 'type'))
        if btype is None or btype.text.strip().upper() != 'POST':
            skipped_comments += 1
            continue

        # Skip trashed posts
        trashed = entry.find(tag(BLOGGER, 'trashed'))
        if trashed is not None and trashed.text and trashed.text.strip():
            skipped_drafts += 1
            continue

        # Skip non-LIVE posts
        bstatus = entry.find(tag(BLOGGER, 'status'))
        if bstatus is not None and bstatus.text.strip().upper() != 'LIVE':
            skipped_drafts += 1
            continue

        # Title
        title_el = entry.find(tag(ATOM, 'title'))
        title = title_el.text.strip() if title_el is not None and title_el.text else 'Untitled'

        # Content (HTML, double-encoded in the XML)
        content_el = entry.find(tag(ATOM, 'content'))
        if content_el is None or not content_el.text:
            continue
        content = content_el.text   # already decoded by ElementTree

        # Published date
        pub_el = entry.find(tag(ATOM, 'published'))
        pub_date = pub_el.text[:10] if pub_el is not None and pub_el.text else '2024-01-01'

        # Categories — scheme contains blog ID, term is the label
        categories = []
        blog_id_pattern = re.compile(r'tag:blogger\.com')
        for cat in entry.findall(tag(ATOM, 'category')):
            scheme = cat.get('scheme', '')
            term   = cat.get('term', '')
            # Only include label categories (scheme contains blogger.com blog id)
            if 'blogger.com' in scheme and term:
                mapped = CATEGORY_MAP.get(term, term)
                categories.append(mapped)

        # Use blogger:filename slug if available, else slugify title
        fname_el = entry.find(tag(BLOGGER, 'filename'))
        if fname_el is not None and fname_el.text:
            # e.g. /2025/08/what-utilization-do-you-target-at-start.html
            raw_slug = fname_el.text.rstrip('/').split('/')[-1].replace('.html', '')
            slug = raw_slug[:80]
        else:
            slug = slugify(title)

        filename = f"{pub_date}-{slug}.md"

        # Build YAML frontmatter
        safe_title = title.replace('"', '\\"').replace('\n', ' ')
        cats_yml   = ', '.join(f'"{c}"' for c in categories) if categories else '"Uncategorized"'

        frontmatter = (
            f'---\n'
            f'title: "{safe_title}"\n'
            f'date: {pub_date}\n'
            f'draft: false\n'
            f'categories: [{cats_yml}]\n'
            f'description: ""\n'
            f'---\n\n'
        )

        filepath = os.path.join(output_dir, filename)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(frontmatter + content)

        posts_converted += 1
        print(f"  ✓  [{', '.join(categories) or 'Uncategorized':25s}]  {filename}")

    print()
    print(f"✅  Done!")
    print(f"   Posts converted : {posts_converted}")
    print(f"   Comments skipped: {skipped_comments}")
    print(f"   Drafts skipped  : {skipped_drafts}")
    print(f"   Output folder   : {os.path.abspath(output_dir)}")

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: python3 blogger_to_hugo.py <feed.atom> <output-dir>")
        print("Example: python3 blogger_to_hugo.py feed.atom content/posts/")
        sys.exit(1)
    convert(sys.argv[1], sys.argv[2])
