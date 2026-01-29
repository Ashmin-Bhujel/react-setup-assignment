# React Setup Assignment

Learning to setup a react project manually.

## Initialize Git Inside the Project Directory

```bash
git init
```

Create a `README.md` file then stage and commit it.

```bash
git add .
git commit -m "chore: initial commit"
```

## Initialize the React Project

```bash
pnpm init
```

### Install Required Dependencies

#### Dependencies

```bash
pnpm add react react-dom
```

#### Dev Dependencies

```bash
pnpm add -D typescript @types/react @types/react-dom vite @vitejs/plugin-react
```

### The `.gitignore` File

Create `.gitignore` file and specify these directories inside the file.

```bash
node_modules
dist
```

### Configure Vite in the Project

#### The `vite.config.ts` File

Export default the `defineConfig` and add the `react` plugin from `@vitejs/plugin-react`.

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

#### The `package.json` File

Change `type` to `module` and add some scripts.

```json
{
  "name": "react-setup-assignment",
  "version": "1.0.0",
  "description": "Learning to setup a react project manually.",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "author": "Ashmin Bhujel <ashminbhujel01@gmail.com>",
  "license": "ISC",
  "packageManager": "pnpm@10.28.2",
  "dependencies": {
    "react": "^19.2.4",
    "react-dom": "^19.2.4"
  },
  "devDependencies": {
    "@types/react": "^19.2.10",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.2",
    "typescript": "^5.9.3",
    "vite": "^7.3.1"
  }
}
```

### Initialize TypeScript in the Project

```bash
pnpm tsc --init
```

#### The `tsconfig.json` File

Below is the minimal configuration to work with vite.

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "moduleResolution": "bundler",
    "jsx": "react-jsx",

    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "useDefineForClassFields": true,
    "isolatedModules": true,

    "noEmit": true,
    "skipLibCheck": true,
    "allowImportingTsExtensions": true,
    "types": ["vite/client"]
  },
  "include": ["src", "vite.config.ts"]
}
```

### Create Necessary Files

Create `src/` directory for files like `app.tsx`, `index.css`, `index.tsx` etc.

#### The `app.tsx` File

```tsx
export default function App() {
  return (
    <main>
      <h1>React Setup Assignment</h1>
      <p>Learning to setup a react project manually.</p>
    </main>
  );
}
```

#### The `index.css` File

```css
*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "DM Sans", sans-serif, system-ui;
}

:root {
  --background: #09090b;
  --foreground: #fafafa;
  --muted-background: #18181b;
  --muted-foreground: #9f9fa9;

  @media (prefers-color-scheme: light) {
    --background: #fafafa;
    --foreground: #09090b;
    --muted-background: #f4f4f5;
    --muted-foreground: #71717b;
  }
}

html,
body {
  width: 100%;
  height: 100%;
}

body {
  background-color: var(--background);
  color: var(--foreground);
}

main {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
}

h1 {
  letter-spacing: -0.05em;
}

p {
  color: var(--muted-foreground);
}

h1,
p {
  animation: blur-fade-up 1.5s cubic-bezier(0.42, 0, 0.19, 1);
}

@keyframes blur-fade-up {
  from {
    opacity: 0;
    transform: translateY(4rem);
    filter: blur(1rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}
```

#### The `index.tsx` File

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

#### The `index.html` File

Create `index.html` file in project's root directory

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Google fonts (DM Sans) -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
      rel="stylesheet"
    />

    <title>React Setup Assignment</title>
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="./src/index.tsx"></script>
  </body>
</html>
```
