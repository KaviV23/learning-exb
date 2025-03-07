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