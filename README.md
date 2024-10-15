# Nomad

Nomad is a web application designed as a travel landing page, focusing on optimizing planning and exploration through an intuitive and responsive interface.

The application is built with TypeScript and React.js, ensuring type safety and a dynamic interface. Sass is used for styling, allowing for customizable and scalable styles. Form management is enhanced with React Hook Form, providing real-time validation, while Yup integrates robust validation schemas to improve user experience.

The project follows best development practices, utilizing absolute imports for improved code organization. Code formatting is managed by Biome.js, ensuring consistency and readability, while comprehensive documentation provides clear guidance on component usage. Additionally, Storybook is employed for developing and documenting components in isolation, enhancing visualization and testing before final integration. The BEM (Block Element Modifier) methodology is adopted for styling, promoting effective organization of CSS classes and facilitating code maintenance and scalability over time.

## Deploy

Access the [Live Demo](https://igorchaves-nomad.vercel.app/) or copy the URL directly: `https://igorchaves-nomad.vercel.app/

## Layout preview

![Image](./public/layout-preview.png)

## Technologies

- TypeScript
- React.js
- Sass
- React Hook Form
- Yup
- Storybook

## Features

**User:**

- Single page application (SPA)
- Responsive design
- Navbar
- Forms with real-time validation, providing immediate feedback to the user
- Call-to-action buttons
- Animated transitions for a smoother experience
- Scroll to top button

**Dev:**

- Version control with Git for collaborative development
- Absolute imports
- Code formatting with Biome.js
- Documentation
- BEM Methodology for styling

## How to Use

**Running app:**

-   Clone this repository to your computer
-   Install dependencies using the command: `pnpm i`
-   Start the development server with: `pnpm dev`
-   Open your browser and navigate to: `http://localhost:3000`

**Running Docs:**

-   To view the components and their variations, use the command: `pnpm storybook`