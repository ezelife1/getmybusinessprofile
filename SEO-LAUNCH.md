# GetMyBusinessProfile launch checks

Production origin: https://getmybusinessprofile.co.uk/

## Included and checked in the build
- Crawlable, server-independent HTML and descriptive service URLs.
- A distinct title, description, H1, canonical and social metadata for each public page.
- XML sitemap for indexable pages; robots.txt points to it. Privacy and 404 use noindex.
- Organisation, WebSite, WebPage, Service and breadcrumb JSON-LD where relevant; no invented address, ratings or testimonials.
- Dedicated setup, management and review pages with cross-links and contextual enquiries.
- Responsive local WebP artwork, intrinsic image dimensions, alt text, lazy loading below the hero and priority loading for the hero.
- Business-specific 1200×630 sharing card; Open Graph and Twitter/X reference the production URL.
- Sticky header and logo; floating contact appears only after the hero.
- Call and WhatsApp point to 07367 856186. The form builds a draft including every field and the selected package. No message is automatically sent.
- Google Business Profile pricing and ownership disclosure in the footer.

## Publish and verify
1. Upload the contents of the ZIP to the root of the site. The bundle assumes directory index support. On GitHub Pages keep CNAME and .nojekyll, use a root publishing folder or branch, and enable HTTPS once DNS is connected.
2. Verify that HTTP and any www alias redirect to the canonical HTTPS host. Verify a missing URL returns HTTP 404 with the included custom 404 page.
3. Verify each canonical URL returns 200, robots.txt and sitemap.xml are publicly fetchable, and /assets/share.jpg returns HTTP 200 with image/jpeg. Check the public HTML contains its metadata, and refresh the social platform's cache if needed.
4. Verify domain ownership in Google Search Console, submit /sitemap.xml, and inspect the homepage and service URLs. Indexing and rankings are not guaranteed.
5. Run live PageSpeed Insights on mobile and desktop after upload; hosting, redirects and caching affect the results. Re-check Core Web Vitals once field data is available.
6. Test the real WhatsApp conversation from a phone and check the operating number receives enquiries. No test message was sent.

## Open on your computer
Extract the full ZIP and double-click the top-level index.html in the extracted folder. Keep the assets and page folders beside it. The same files can be uploaded to your host; production links retain the clean URLs.
