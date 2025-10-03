# Project Overview: Portfolio V2 – Ahmed Emad

This project is a personal portfolio website for Ahmed Emad, a UI/UX Designer. It's a complete redesign and rebuild of his previous portfolio, focusing on a modern, fast, and scalable user experience. The portfolio showcases his UI/UX design projects and front-end work, serving as a platform for personal branding and a gateway for professional connections.

## Key Technologies:
*   **Frontend:** React 18, TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS
*   **Icons:** Lucide Icons
*   **Deployment:** GitHub Pages
*   **UI Components:** Utilizes a wide range of Radix UI components for accessible and customizable UI primitives.

## Architecture:
The application is structured as a single-page application (SPA) built with React. It uses a component-based architecture, with a main `App.tsx` component orchestrating various sections like `Navbar`, `AboutSection`, `ProjectsSection`, etc. Global styles are managed via `index.css` (Tailwind CSS). The project includes a dark mode toggle with preference persistence using `localStorage`.

## Building and Running:

### Development:
To start the development server:
```bash
npm run dev
```
This will typically run the application on `http://localhost:3000` and open it in your browser.

### Production Build:
To build the project for production:
```bash
npm run build
```
This command compiles the React application and outputs the static files to the `build` directory, optimized for deployment.

## Development Conventions:

### Styling:
*   **Tailwind CSS:** The project heavily relies on Tailwind CSS for utility-first styling.
*   **Dark Mode:** A dark mode is implemented with a toggle and preference saving.

### Component Structure:
*   Components are organized into a `src/components` directory, with further subdirectories for specific categories (e.g., `ui` for Radix UI components).
*   Main sections of the portfolio are also treated as components (e.g., `AboutSection`, `ProjectsSection`).

### Aliases:
*   `@`: Resolves to the `src` directory.
*   `@images`: Resolves to the `public/images` directory.

### Deployment:
*   The project is configured for deployment to GitHub Pages, as indicated by the `base: '/Portfolio-V2/'` in `vite.config.ts` and the `.github/workflows/deploy.yml` file (though the deploy.yml was not read, it's a common pattern for GitHub Pages).
