# 1. No Frills React

## React without Buildstep

These files allow you to run React without a build script:

```
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js"></script>
<script src="./src/App.js"></script>
```

Just place them in the body of your HTML file.  
The last script tag specifies the location of the components file (`App.js`). This is what defined the root component of the website.  

## Components

Example of `App.js`:

```
const Pizza = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "The Pepperoni Pizza"),
    React.createElement("p", {}, "Mozzarella Cheese, Pepperoni"),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Pixel Perfect Pizzas"),
    React.createElement(Pizza),
    React.createElement(Pizza),
    React.createElement(Pizza),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
```

Explanation of each component by order:
1. `Pizza` is a React component. It currently has a `div` root and has two children, a `h1` element and `p` element.
2. `App` is the root component. It's root also consists of a div, and has 4 children elements. The first is a `h1` element and the rest are instances of the `Pizza` element defined previously.
3. The last set of code are to set the main root element of the body tag in the `index.html` file as a ReactDOM root. Then it renders the `App` component at the root.

The syntax of `createElement`:

```
React.createElement(<html_tag>, {<props_properties_to_pass_down>}, [<children_components>])
```

### Using Props

1. Require a `props` parameter for the the React component function.
2. Access properties of these props in child componenets using the dot (`.`) connector.
3. When calling the component elsewhere, supply properties of props in the curly braces (or object `{}`) parameter of the component.

Example:

```
const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Pixel Perfect Pizzas"),
    React.createElement(Pizza, {
      name: "Hawaiian Pizza",
      description: "Pizza served with Pizza sauce, pepperonis and pineapple.",
    }),
    React.createElement(Pizza, {
      name: "Satay Pizza",
      description: "Satay flaboured pizza",
    }),
    React.createElement(Pizza),
    React.createElement(Pizza),
  ]);
};
...
```
