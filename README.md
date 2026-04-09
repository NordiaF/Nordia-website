# Nordia Foundations

A [Next.js](https://nextjs.org) project built with modern web technologies and best practices.

## Project Overview

Nordia Foundations is a foundation project for building scalable, maintainable web applications using Next.js 16, React 19, TypeScript, Tailwind CSS, and ESLint.

## Project Structure

```
nordia-foundations/
├── src/
│   └── app/                      # Next.js App Router directory
│       ├── page.tsx              # Home page component
│       ├── layout.tsx            # Root layout component
│       ├── globals.css           # Global Tailwind CSS styles
│       └── favicon.ico           # Application favicon
├── public/                        # Static assets
├── eslint.config.mjs             # ESLint configuration
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
├── package.json                  # Project dependencies
└── README.md                      # This file
```

## Tech Stack

- **Framework**: [Next.js 16.1.6](https://nextjs.org/) - React framework with server-side rendering
- **Runtime**: [React 19.2.3](https://react.dev/) & [React DOM 19.2.3](https://react.dev/reference/react-dom)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS 3.4.19](https://tailwindcss.com/) - Utility-first CSS framework
- **CSS Processing**: [PostCSS 8.5.6](https://postcss.org/) & [@tailwindcss/postcss 4](https://tailwindcss.com/)
- **Linting**: [ESLint 9](https://eslint.org/) & [eslint-config-next](https://eslint-react.xyz/)
- **Build Tools**: [Autoprefixer 10.4.24](https://github.com/postcss/autoprefixer)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The application will auto-reload as you edit files in the `src/app` directory.

## Google Sheet Integration

The blog newsletter form can submit directly to a Google Sheet through a Google Apps Script web app.

1. Create a sheet with columns such as `firstName`, `lastName`, `email`, `message`, `submittedAt`, and `source`
2. Open `Extensions` -> `Apps Script` from the target Google Sheet
3. Paste a script like this:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const data = e.parameter;

  sheet.appendRow([
    data.firstName || "",
    data.lastName || "",
    data.email || "",
    data.message || "",
    data.submittedAt || "",
    data.source || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Deploy the script as a Web App:
   - Execute as: `Me`
   - Who has access: `Anyone`
5. Copy the deployed URL into `.env.local` as:

```bash
NEXT_PUBLIC_NEWSLETTER_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

6. Restart the Next.js dev server after updating the environment file

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create an optimized production build
- `npm run start` - Run the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Rules & Best Practices

### Structure Guidelines

1. **App Router**: All routes are defined in `src/app/` using Next.js 16 App Router
2. **Component Organization**: 
   - Page components go in route directories
   - Layout components define structure for route segments
   - Global styles in `globals.css` using Tailwind directives

3. **TypeScript**: 
   - All files use TypeScript for type safety
   - Enable strict mode in `tsconfig.json`
   - Export types explicitly from components

### Styling Guidelines

1. **Tailwind First**: Use Tailwind CSS utility classes for styling
2. **Global Styles**: Import in `layout.tsx` only
3. **CSS Modules**: Can be used for component-scoped styles (if needed)
4. **Responsive Design**: Use Tailwind's responsive prefixes (sm:, md:, lg:, xl:, 2xl:)

### Code Quality Rules

1. **Linting**: Run `npm run lint` before committing code
2. **Type Safety**: No `any` types unless absolutely necessary with comments
3. **Imports**: Use absolute imports with `@/*` path alias
4. **Naming Conventions**:
   - Files: `kebab-case` (e.g., `my-component.tsx`)
   - Components: `PascalCase` (e.g., `MyComponent`)
   - Variables/Functions: `camelCase` (e.g., `myVariable`)

### Performance Best Practices

1. Use Next.js Image component for optimized images
2. Implement dynamic imports for code splitting
3. Leverage Server Components by default in App Router
4. Use Client Components only when necessary (with `use client` directive)

### Environment

- Path alias `@/*` resolves to `./src/*` for cleaner imports
- All configuration files at project root for easy discoverability

## File Descriptions

### Configuration Files

- **`next.config.ts`** - Next.js framework configuration
- **`tsconfig.json`** - TypeScript compiler options and path aliases
- **`tailwind.config.js`** - Tailwind CSS customization and theme
- **`postcss.config.js`** - PostCSS plugin configuration for Tailwind
- **`eslint.config.mjs`** - Code quality and style rules

### Key Directories

- **`src/app/`** - Application routes and pages using App Router
- **`public/`** - Static files (accessible at root URL)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Features and API reference
- [Next.js Learn Course](https://nextjs.org/learn) - Interactive tutorial
- [React Documentation](https://react.dev) - React fundamentals
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Type definitions
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Styling utilities
- [Next.js GitHub Repository](https://github.com/vercel/next.js) - Contribute and provide feedback

## Deployment

### Deployment Options

1. **Vercel** (Recommended)
   - [Vercel Platform](https://vercel.com) - Created by Next.js authors
   - Automatic deployments from git
   - Serverless functions support
   - See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying)

2. **Other Platforms**
   - Docker containers
   - Self-hosted servers
   - AWS, Google Cloud, Azure, etc.

## License

Proprietary - Nordia Foundations

## Support

For issues, questions, or contributions, please refer to project documentation or contact the development team.
