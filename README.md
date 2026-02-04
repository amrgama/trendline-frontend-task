# Frontend Interview Task

This project is a frontend implementation for an e-commerce platform, featuring a product details page and authentication flows. It is built with **Next.js 16**, **Tailwind CSS**, and **Shadcn UI**.

## Features

- **Product Details Page**:
  - Comprehensive product view with image gallery, detailed info, and reviews.
  - **Responsive Design**: Fully responsive layout matching the provided Figma design.
  - **Interactive Elements**:
    - Image slider for similar items (Embla Carousel).
    - Quantity selector and color picker.
    - "Add to Cart" and "Wishlist" UI interactions.
    - Dynamic "Offer Badge" on product cards.

- **Authentication**:
  - Login, Register, and Verify Email pages.
  - Form validation using `zod` and `react-hook-form`.
  - API integration setup via `axios`.

- **Modular Architecture**:
  - Scalable `src/` directory structure.
  - Reusable components (ProductCard, Footer, Section wrappers).
  - Centralized local SVG icon management system.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Form Handling**: React Hook Form + Zod
- **HTTP Client**: Axios
- **Icons**: Local SVG icons + Lucide React
- **Carousel**: Embla Carousel

## Getting Started

### Prerequisites

- Node.js 18+ installed

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd frontend-task
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Configure Environment:**
   Create a `.env.local` file in the root directory if you need to override the default API URL.

   ```env
   NEXT_PUBLIC_API_URL=https://tinytales.trendline.marketing/api
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── public/                 # Static assets (images, fonts)
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── (auth)/         # Authentication routes
│   │   ├── dashboard/      # User dashboard
│   │   └── products/       # Product pages
│   ├── assets/             # Component-specific assets
│   ├── components/         # React components
│   │   ├── forms/          # Form components (Login, Register)
│   │   ├── icons/          # Local SVG icons (custom system)
│   │   ├── layout/         # Layout components (Header, Footer)
│   │   ├── products/       # Product-specific components
│   │   ├── shared/         # Common UI elements
│   │   └── ui/             # Shadcn UI primitives
│   ├── lib/                # Utilities, API clients, validators
│   └── types/              # TypeScript type definitions
└── tailwind.config.ts      # Tailwind configuration
```

## Key Implementation Details

- **Icon System**: Replaced external icon libraries in key areas (Footer) with optimized local SVGs for pixel-perfect design matching.
- **Component Design**: Footer and Header are split into sub-components for better maintainability.
- **State Management**: Uses React local state for UI interactions (sliders, quantity) and URL search params for navigation state where appropriate.
