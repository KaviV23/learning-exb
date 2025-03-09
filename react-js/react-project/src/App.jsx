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
        image="/public/pizzas/hawaiian.webp"
      />
      <Pizza
        name="BBQ Pizza"
        description="Pizza served with pizza sauce, pepperonis and pineapple."
        image="/public/pizzas/bbq_ckn.webp"
      />
      <Pizza
        name="Mexicana Pizza"
        description="Pizza served with pizza sauce, pepperonis and pineapple."
        image="/public/pizzas/mexicana.webp"
      />
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
