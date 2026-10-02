# Nexora

A responsive landing page for Nexora, a fictional digital products and services company. The page is built with React and React-Bootstrap, with product and blog content stored in local JavaScript arrays.

## Features

- Responsive Bootstrap navigation bar with a mobile menu
- Hero banner with background image and call-to-action buttons
- Statistics displayed from data using a reusable `StatCard`
- Product cards displayed from data, with category filters for All, Software, Cloud, and Business
- Empty-state message when a product category has no matching products
- Two-column "Why Choose Us" section with feature list and image
- Blog cards displayed from data
- Call-to-action banner and footer with navigation and social links

## Built with

- React
- Vite
- React-Bootstrap
- Bootstrap 5
- Bootstrap Icons

## Getting started

### Requirements

- Node.js
- npm

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

## Project structure

```text
src/
├── components/
│   ├── BlogCard.jsx
│   ├── BlogSection.jsx
│   ├── CtaBanner.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── ProductsSection.jsx
│   ├── StatCard.jsx
│   ├── StatsSection.jsx
│   └── WhyChooseUs.jsx
├── data/
│   └── homeData.js
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

Product, statistics, blog, and benefit data can be edited in `src/data/homeData.js`.
