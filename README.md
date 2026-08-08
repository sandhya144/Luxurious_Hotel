# 👩🏻‍💻 Hotel Website

A polished React + Vite + TypeScript website for a Hotel in Varanasi. The experience is designed to feel warm, elegant, and easy to explore for pilgrims, families, and leisure travellers looking for a comfortable stay close to Kashi Vishwanath Temple.

## 💡Overview

This project showcases the hotel’s key offerings through a modern, responsive landing experience:

- a welcoming hero section
- room highlights and detailed room pages
- a gallery with image lightbox browsing
- nearby attractions and local experiences
- guest reviews and FAQs
- a WhatsApp-based reservation flow

## ⚙️Features

- Responsive multi-page experience built with React Router
- Smooth animated transitions with Framer Motion
- Tailwind CSS styling for a refined hospitality-focused UI
- SEO metadata and structured data for better discoverability
- Easy reservation enquiry flow via WhatsApp
- Lightweight image gallery and interactive lightbox

## 🛠️Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- React Helmet Async
- Lucide React
- Supabase JS (included in dependencies)

## ⚙️Project Structure

```text
src/
  components/      # Reusable UI pieces such as navbar, hero, lightbox, reserve form
  data/            # Hotel content, room data, gallery content, FAQs, and contact info
  hooks/           # Custom hooks
  pages/           # Home, Rooms, and Gallery routes
  sections/        # Page sections like facilities, testimonials, contact, and nearby spots
```

## 🚀Getting Started

### ⚙️Prerequisites

- Node.js 18+
- npm

### 💡Installation

```bash
npm install
```

### 🛠️Development

```bash
npm run dev
```

Then open your browser at:

```text
http://localhost:5173
```

## 🪜Available Scripts

```bash
npm run dev      # start the Vite development server
npm run build    # build the production bundle
npm run preview  # preview the production build locally
npm run lint     # run ESLint
npm run typecheck # run the TypeScript type check
```

## 🔨Build

To create a production build:

```bash
npm run build
```

The output will be generated in the `dist/` folder.

## 👩🏻‍💻Deployment

This app can be deployed to any static hosting platform such as Vercel, Netlify, or GitHub Pages. Since it is a Vite app, the standard build output is ready for deployment.
