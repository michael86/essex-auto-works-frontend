# Essex Auto Works Frontend

This is the frontend for the Essex Auto Works invoice and customer management system, built with:

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.com/)
- [TanStack Router](https://tanstack.com/router)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)

## Setup

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

## .env Example

```
VITE_DEV_API_URL=http://localhost:3000/
VITE_PRODUCTION_API_URL=https://app.url.com/
VITE_APP_NAME=Essex Auto Works
VITE_ENABLE_DEBUG=true
```

## Features

- Modern component library via ShadCN
- Utility-first CSS with Tailwind v4
- Alias-based imports (`@/components`, `@/lib`)
- Secure password reset & email verification flow
- Scalable architecture for invoices, customers, and user management

## Project Structure

```
src/
├─ components/       # ShadCN UI components
├─ pages/            # Route-based pages
├─ routes/           # TanStack route definitions
├─ lib/              # API logic, helpers
├─ store/            # Redux slices & setup
├─ utils/            # Misc utilities
├─ main.tsx          # Entry point
```

## 🧪 ESLint & TypeScript Setup

For strict, type-aware linting, use:

```ts
parserOptions: {
  project: ['./tsconfig.node.json', './tsconfig.app.json'],
  tsconfigRootDir: import.meta.dirname,
}
```

For React rules:

```bash
npm install eslint-plugin-react-x eslint-plugin-react-dom --save-dev
```

```ts
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      reactX.configs["recommended-typescript"],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
```

## ⚠️ Notes

- Only environment variables prefixed with `VITE_` are exposed to the client.
