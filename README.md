# CoveredCA Clone Client

## Background
This project aims to demonstrate how to optimize coveredca.com. As far as I can tell, CoveredCA.com is rendered completely on the client (CSR). Much of the site, prior to the user logging-in, is static content that can be built in advance on the server. NextJS has server-side rendering (SSR) built in along with many other optimizations. Therefore, it is my framework of choice for this project.

## Tech Stack
- NextJS
- TailwindCSS

## Figma Design
Learn more about the design:
https://dev.to/pgomezec/a-user-centered-coveredcacom-5hco

https://www.figma.com/file/SI5OLMV0gbzCZ33uFAOFFs/CoveredCa?type=design&node-id=2-7&mode=design&t=0KoM9vsMBQ99WPes-0

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
