# Paradise Valley Eye Docs — Website

Production-grade Astro + Tailwind static site for Paradise Valley Eye Docs, LLC.
14 pages, full SEO with LocalBusiness schema, mobile-responsive, Netlify-ready.

## Quickstart

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to /dist
npm run preview  # preview built site
```

## Pages

```
/                              Home
/about                         About + Costco explainer
/doctors                       Doctors index
/doctors/nimo-yousuf           Dr. Yousuf bio
/doctors/hannah-alegado        Dr. Alegado bio
/doctors/scott-wayment         Dr. Wayment bio
/services                      Services index
/services/eye-exams            Comprehensive eye exams
/services/contact-lenses       Contact lens fittings
/services/dry-eye              IPL/RF dry-eye (premium differentiator)
/contact                       Contact + hours + map
/privacy                       Privacy policy stub
/accessibility                 Accessibility statement
/404                           Custom 404
```

Plus auto-generated `sitemap-index.xml` and `sitemap-0.xml`.

## Brand kit — implemented

Colors in `tailwind.config.mjs`, fonts in `src/styles/global.css`.

| Token | Hex | Tailwind |
|---|---|---|
| Deep Navy | `#0D2340` | `text-navy`, `bg-navy` |
| Slate Blue | `#4D6B87` | `text-slate` |
| Sage Green | `#7DA18A` | `text-sage` |
| Warm Gold | `#C8A15A` | `text-gold` |
| Warm Gray | `#F2F3F4` | `bg-warmgray` |
| Cream | `#FBF9F5` | `bg-cream` |

Fonts (Google Fonts):
- Headings: **Cinzel** (`font-display`)
- Body: **Montserrat** (`font-sans`)

## Before launch — required actions

### 1. Doctor photos (optional but big win)
Save headshots to `/public/images/`:
- `dr-yousuf.jpg`, `dr-alegado.jpg`, `dr-wayment.jpg`

Then in `src/data/site.ts`, change each doctor's `image` field from
`/images/placeholder-doctor.jpg` to the real path. The placeholder eye
icon appears automatically until then.

### 2. Google Maps key
`src/pages/contact.astro` has a Maps iframe with `YOUR_API_KEY`. Two options:
- **Free:** Replace the iframe with Google's "Embed a map" code from
  maps.google.com (search address → Share → Embed a map).
- **API:** Get a free Maps Embed API key from Google Cloud and paste it.

### 3. Site URL
In `astro.config.mjs`, the `site` field controls canonical URLs and sitemap
generation. For the first Netlify deploy, change to your preview URL (e.g.
`https://pveyedocs.netlify.app`). Change to `https://www.eyedocspv.com`
when ready to launch.

### 4. og-image
Create a 1200×630px Open Graph image, save as `/public/og-image.jpg`.

### 5. Favicon
Save a favicon SVG as `/public/favicon.svg` and a 180×180 PNG as
`/public/apple-touch-icon.png`. Generator: realfavicongenerator.net.

### 6. Privacy policy PDF
Save the real PDF as `/public/2025-Notice-of-Privacy-Practices.pdf`, or
update the link in `src/pages/privacy.astro`.

## Deploying to Netlify

1. Push this repo to GitHub.
2. Netlify → Add new site → Import from GitHub.
3. Build settings auto-detected from `netlify.toml`.
4. Click Deploy.

You'll get `<random-name>.netlify.app`. Rename in Site Settings → Domain
Management → Edit Site Name to e.g. `pveyedocs.netlify.app`.

### Pointing eyedocspv.com at Netlify (when ready)
1. Netlify → Domain Management → Add custom domain.
2. Update DNS at your registrar (or delete from Wix and re-point):
   - A record → Netlify's load-balancer IP
   - CNAME `www` → your Netlify subdomain
3. SSL provisions automatically via Let's Encrypt.

## Editing content

**Site-wide data** lives in `src/data/site.ts`: phone, email, address,
hours, doctor bios, service list. Edit once, propagates everywhere.

**Page-specific copy** is in `src/pages/*.astro`. Edit between `<section>`
tags. Header, footer, and SEO are shared via `src/layouts/BaseLayout.astro`.

## SEO checklist (done)

- LocalBusiness + Physician + Optometrist schema (auto from `site.ts`)
- Sitemap.xml auto-generated
- robots.txt allowing all crawlers
- Open Graph + Twitter Card meta on every page
- Canonical URLs everywhere
- Semantic HTML, image alt text
- Mobile-responsive, no framework runtime

**Post-launch SEO**:
- Submit sitemap to Google Search Console
- Verify schema in https://search.google.com/test/rich-results
- Update Google Business Profile to match site NAP exactly

## Project structure

```
pveyedocs/
├── astro.config.mjs
├── tailwind.config.mjs
├── netlify.toml
├── tsconfig.json
├── package.json
├── public/
│   ├── logos/                # logo PNGs (6 variants included)
│   ├── images/               # add doctor headshots here
│   ├── brand/                # brand kit reference
│   └── robots.txt
└── src/
    ├── data/site.ts          # SOURCE OF TRUTH — edit me first
    ├── styles/global.css
    ├── layouts/BaseLayout.astro
    ├── components/
    │   ├── SEO.astro         # Meta + LocalBusiness schema
    │   ├── Header.astro
    │   ├── Footer.astro
    │   ├── CTASection.astro
    │   ├── DoctorCard.astro
    │   └── ServiceCard.astro
    └── pages/
        ├── index.astro
        ├── about.astro
        ├── contact.astro
        ├── privacy.astro
        ├── accessibility.astro
        ├── 404.astro
        ├── doctors/
        │   ├── index.astro
        │   └── [slug].astro
        └── services/
            ├── index.astro
            ├── eye-exams.astro
            ├── contact-lenses.astro
            └── dry-eye.astro
```

© Paradise Valley Eye Docs, LLC. All rights reserved.
