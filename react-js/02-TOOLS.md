# Tools for React.js

## `npm` 

Node.js's package manager.

```
npm init -y
```

Generate `package.json` without any prompts.

Another option is to use `pnpm`, it has its own tradeoffs.

## `Prettier`

Code Formatter. Automatically formats code on spaces.

You can install Prettier as a dev-dependency in node projects. Run the following to install Prettier:

```
npm i -d prettier
```

The `-d` tag specifies that Prettier is a dev-dependency, and won't be required for production.

Then to use this functionality, first set-up a script in the `package.json` file.

```
...
"scripts": {
  "format": "prettier --write \"src/**/*.{js,jsx,css,html}\"",
}
...
```

Then to use this feature, run `npm run format`.

## ESLint

Prettier is only manages whitespaces. ESLint manages the code itself.

Install ESLint:

```
npm install -D eslint@9.9.1 eslint-config-prettier@9.1.0 globals@15.9.0
```

Then create `eslint.config.mjs` file in the root folder of your React project with the following content.

```
import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  prettier,
];
```

Then edit the `package.json` file to include a script for linting:

```
...
"scripts": {
  ...
  "lint": "eslint",
  ...
}
```

## Git

Useful `.gitignore` config:

```
.DS_Store
node_modules/
dist/
.env
coverage/
.vscode/
```

## Vite

Pronounced 'veet'.

Makes it easier to work with multiple files, modules etc.

Installing Vite as a developer dependency:

```
npm install -D vite@5.4.2 @vitejs/plugin-react@4.3.1
```

Now you can go into the `index.html` file and delete the two first script tags, and then add `type="module"` attribute to the remaining one.

Then, create a new file named `vite.config.js` with the following contents:

```
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

Then, install React:

```
npm install react@18.3.1 react-dom@18.3.1
```

At this point, React is no longer available. To use react, import the necessary modules in `App.js`.
Also delete `ReactDOM` before the dot connector (`.`) for the root variable at the end of the file.

```
import React from "react";
import { createRoot } from "react-dom";
...
const root = createRoot(container);
...
```

Also, now we must set-up three more scripts for running Vite for building, development and previews. Edit the scripts section in the `package.json` file with the following:

```
"scripts": {
  "build": "vite build",
  "dev": "vite",
  "preview": "vite preview",
  ...
}
```

The different scripts:

1. `dev` - For local dev environment.
2. `build` - Build the project into static assets for deployment.
3. `preview` - Helps find bugs that are usually found after building the source code for deployment, without actually building the code. Rarely used.

Also add `"type": "module"` in the `package.json` file. This specified that ECMAScript module import syntax is used instead of the traditional require statement in JavaScript.
