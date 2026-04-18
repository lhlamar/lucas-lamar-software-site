# Lucas Lamar Software Site

Personal portfolio and resume website for Lucas Lamar, built with Next.js App Router.

## Overview

This project is a single-page portfolio that includes:

- Full-screen hero section with profile image and social links
- Work experience, education, technical skills, and training/certifications
- Light/dark mode toggle
- Smooth section scrolling with sticky navigation
- Contact form wired to a server API route that sends email via Resend

## Tech Stack

- Next.js `16.2.4`
- React `19.2.4`
- TypeScript `^5`
- Tailwind CSS `^4`
- Resend `^6.12.0`
- ESLint `^9`

## Project Version

- App version: `0.1.0`

## Prerequisites

- Node.js 20+ recommended
- npm 10+ recommended

## Available Scripts

- `npm run dev`: Run the app in development mode.
- `npm run build`: Build the production bundle.
- `npm run start`: Start the production server from the built app.
- `npm run lint`: Run ESLint checks.

## Build and Run (Production)

```bash
npm run build
npm run start
```

## Key Paths

- `app/page.tsx`: Main portfolio page and section layout
- `app/components/ContactForm.tsx`: Contact form UI/client logic
- `app/api/contact/route.ts`: Contact API route with Resend integration
- `app/globals.css`: Theme tokens and global styling
