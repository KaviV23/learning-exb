import React from "react";
import { createRoot } from "react-dom";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Hawaiian Pizza",
      description: "Pizza served with pizza sauce, pepperonis and pineapple.",
    }),
    React.createElement(Pizza, {
      name: "Satay Pizza",
      description: "Satay flaboured pizza",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
