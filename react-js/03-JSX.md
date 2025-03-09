# JSX in React

## What is JSX?

Everyone uses JSX to write JavaScript and HTML in React. It simplifies writing HTML in React.

From: 

```
React.createElement("h1", { id: "main-title" }, "My Website");
```

To:

```
<h1 id="main-title">My Website</h1>
```

Just like HTML! But within JavaScript code/file (`.jsx`).

To write JavaScript within HTML code in `.jsx` files, use curly brackets (`{}`).

## Configuring ESLint

Install the eslint pluggin:

```
npm i -D eslint-plugin-react
```

Then, update `eslint.config.mjs`:

```
...
// UNDER `js.configs.recommended`
{
  ...reactPlugin.configs.flat.recommended,
  settings: {
    react: {
      version: "detect",
    },
  },
},
...
  // AFTER `languageOptions`
  rules: {
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
  }
...
```

## Rewriting App.js to App.jsx

Now you can rename the `.js` files to be `.jsx`. Files with `.jsx` do not need to import React anymore.
Then, don't forget to rewrite JS component functions into JSX's HTML syntax.

```
// import React from "react";
import { createRoot } from "react-dom";
import Pizza from "./Pizza.jsx";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza
        name="Hawaiian Pizza"
        description="Pizza served with pizza sauce, pepperonis and pineapple."
      />
      <Pizza name="Satay Pizza" description="Satay flaboured pizza" />
    </div>
  );
  //   React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Padre Gino's"),
  //   React.createElement(Pizza, {
  //     name: "Hawaiian Pizza",
  //     description: "Pizza served with pizza sauce, pepperonis and pineapple.",
  //   }),
  //   React.createElement(Pizza, {
  //     name: "Satay Pizza",
  //     description: "Satay flaboured pizza",
  //   }),
  // ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(React.createElement(App));
root.render(<App />);
```

Don't forget to update `Pizza.js` to `Pizza.jsx` aswell. 

Also change the module import script in `index.html` to match the newly renamed `App.jsx` file.

## Setting Up API for Testing with React

API Server available in this [GitHub Repo](https://github.com/btholt/citr-v9-project).

- Fastify
- SQLite DB

### Get It Up and Running

CD into the repository and run the following:

```
npm install
```

Once thats done, run the API Server:

```
npm run dev
```

### Configuring Vite as Proxy Server

Open `vite.config.js` and add a new section in the `defineConfig`:

```
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true
      },
      "/public": {
        target: "http://localhost:3000",
        changeOrigin: true
      },
    },
  },
  plugins: [react()],
});
```

Now all requests made on the `/api` and `/public` endpoint on your Vite server will proxy requests to the API server.

## Setting Up Static Assets

Here we will be setting up images and stylesheets

Add stylesheet to `index.html` under the `<head>` tag:

```
<link rel="stylesheet" href="/public/style.css">
```

Then, through the proxy we've set up earlier, we can access images stored on the API server at `/public/pizzas/*`. Add images to the pizzas by modifying the `Pizza` component to add an `img` element with props for the image source.

```
# Pizza.jsx
<div className="pizza">
  <img src={props.image} alt={props.name} />
...
</div>

# App.jsx
<Pizza
  name="Hawaiian Pizza"
  description="Pizza served with pizza sauce, pepperonis and pineapple."
  image="/public/pizzas/hawaiian.webp"
/>
```
