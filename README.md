MVP- Minimal Viable Product

1. Project Initialize + Tailwind + Shadcn/Ui + fonts
   a. Create Next app with tailwind and typescript
   npx create-next-app@latest
   b. Remove Tailwind and install manually

c. fonts
Use built-in next/fonts
In app/layout.tsx

import { Inter, Montserrat } from 'next/font/google';

// 1) Configure each font and expose a CSS variable
const inter = Inter({
subsets: ['latin'],
variable: '--font-inter', // 👈 custom css var
display: 'swap', // removes FOIT
});

const montserrat = Montserrat({
subsets: ['latin'],
variable: '--font-mont',
weight: ['400', '600', '700'],
display: 'swap',
});

export const metadata = {
title: 'SuryaRun Solar Solution',
description: 'Independent solar consultation',
};

export default function RootLayout({
children,
}: React.PropsWithChildren) {
return (

<html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
<body>{children}</body>
</html>
);
}

main concept here is css variable.

Extend tailwind to use those variables
tailwind.config.ts

import type { Config } from 'tailwindcss';

const config: Config = {
content: [
'./app/**/*.{ts,tsx}',
'./components/**/*.{ts,tsx}',
'./content/**/*.{mdx,md}', // if you use MDX
],
theme: {
extend: {
fontFamily: {
// default body text
sans: ['var(--font-inter)', 'sans-serif'],
// headings
heading: ['var(--font-mont)', 'sans-serif'],
},
},
},
plugins: [require('@tailwindcss/typography')],
};
export default config;

Apply fonts in CSS/utilities
app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
h1, h2, h3, h4, h5 {
@apply font-heading;
}
}

Install tailwind version 3.4 because tailwind.config.ts is removed from new tailwind version
npm i -D tailwindcss@^3.4 postcss@latest autoprefixer@latest
npx tailwindcss init -p → creates tailwind.config.js + postcss.config.js

Navbar
npx shadcn@latest add button
npx shadcn@latest add navigation-menu
npx shadcn@latest add sheet
