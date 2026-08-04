# Renan Fenrich Portfolio

Source code for Renan Fenrich's bilingual professional portfolio, focused on Senior DevOps Engineering, cloud infrastructure, platform reliability, automation, security, and technical leadership.

Live site: [renan-fenrich.renanfenrich.chatgpt.site](https://renan-fenrich.renanfenrich.chatgpt.site)

## Highlights

- Portuguese and English content with an explicit language switcher
- Responsive dark interface
- Montserrat typography with bold and light weight contrast
- Professional journey, experience, capabilities, and contact information
- Keyboard, touch, and reduced-motion considerations

## Stack

- TypeScript
- React
- Next.js-compatible Vinext runtime
- Vite
- Cloudflare Workers
- CSS

## Local development

Requirements:

- Node.js 22.13 or newer
- npm

Install and run:

```bash
npm ci
npm run dev
```

Validation:

```bash
npm test
npm run lint
```

## Importing into OpenAI Sites

The original `.openai/hosting.json` is intentionally not included because it contains the identity of the currently published Site.

When importing this source into another Sites project:

1. Create the destination Site first.
2. Preserve the `.openai/hosting.json` generated for the destination project.
3. Copy this repository's files into that checkout.
4. Install dependencies, validate, and publish through the Sites lifecycle.

This prevents the new source from being connected to the original Site project.

## Repository policy

Generated dependencies, build output, runtime caches, environment files, and credentials are excluded from version control.
