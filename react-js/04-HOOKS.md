# React Hooks

Keeping track of statefulness in React components.

## Creating an Order Page Component

This will be the order page. Create and start editing a new file named `Order.jsx`:

```
import Pizza from "./Pizza";

export default function Order() {
  // defaults
  const pizzaType = "pepperoni"
  const pizzaSize = "M"

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form action="">
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select name="pizza-type" value={pizzaType}>
              <option value="pepperoni">The Pepperoni Pizza</option>
              <option value="hawaiian">The Hawaiian Pizza</option>
              <option value="big_meat">The Big Meat Pizza</option>
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div>
              <span>
                <input 
                  checked={pizzaSize === "S"}
                  type="radio" 
                  name="pizza-size" 
                  id="pizza-s" 
                  value="S" 
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input 
                  checked={pizzaSize === "M"}
                  type="radio" 
                  name="pizza-size" 
                  id="pizza-m" 
                  value="M" 
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input 
                  checked={pizzaSize === "L"}
                  type="radio" 
                  name="pizza-size" 
                  id="pizza-l" 
                  value="L" 
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
            <button type="submit">Add to Cart</button>
            <div className="order-pizza">
              <Pizza
                name="Pepperoni"
                description="cheese, pepperoni, sauce"
                image="public/pizzas/pepperoni.webp"
              />
            </div>
          </div>
        </div>
      </form>

    </div>
  )
}
```

Update the `App.jsx` page to include the changes:

```
...
const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Order />
    </div>
  );
}
...
```

## Using `useState` Hooks

Currently the website does not update selected values in the form. To update data, we use the `useState` hook provided by React.

```
import { useState } from `react`;
...
// change these const strings to implement useState instead
// const pizzaType = "pepperoni"
// const pizzaSize = "M"

const [pizzaType, setPizzaType] = useState("pepperoni");
const [pizzaSize, setPizzaSize] = useState("M");
```

Then update the form to use the `useState` hooks:

```
...
<select
  name="pizza-type"
  value={pizzaType}
  onChange={(e) => setPizzaType(e.target.value)}
>
...

// add the following to each radio input element
    <input
      ...
      onChange={(e) => setPizzaSize(e.target.value)}
    >
...
```

**Rules for `useState` Hooks**

1. Never put them in conditionals (e.g. if statements, loops etc.).
2. Strict ordering. Must always be in the same order once initialized and running.

## Using `useEffect` Hooks

Effects, aka side effects, something happens outside of the current component. E.g. HTTP requests.

Example use case:

- Load current pizza types from a backend service for the first time. useEffect prevents the API call being executed every time the website is refreshed.

```
// calls a function that stores `pizzaTypes` from backend API
useEffect(async () => {
    fetchPizzaTypes();
  }, []);
```

The empty array parameter makes it so it only runs once.

Now, replace the placeholder option values with API request results:

```
<select
  name="pizza-type"
  value={pizzaType}
  onChange={(e) => setPizzaType(e.target.value)}
>
  {pizzaTypes.map((pizza) => (
    <option key={pizza.id} value={pizza.id}>
      {pizza.name}
    </option>
  ))}
</select>
```

Then, also replace the `Pizza` component to use the selected Pizza attributes.

```
<Pizza
  name={selectedPizza.name}
  description={selectedPizza.description}
  image={selectedPizza.image}
/>
```

Then, calculate the price of the Pizza:

```
if (!loading) {
  ...
  price = intl.format(selectedPizza.sizes[pizzaSize]);
}
```

Update the page now to show the pizza price, along with a loading text:

```
{loading ? (
  <h1>Loading...</h1>
  ) : (
  <Pizza
    name={selectedPizza.name}
    description={selectedPizza.description}
    image={selectedPizza.image}
  />
)}
```

## Keys

React keys are unique identifiers for items in a list. Usually is associated with the list item's id. React uses this to keep track of these elements (possibly to keep them in order).

## Strict Mode & Dev Tools

### `NODE_ENV=development`

Tells node that you are in development mode. **Vite handles it automatically**. The default is production mode. Important in React as it will provide better error messages. It will also speed up development and reduce file sizes. Make sure to change this to production when deploying.

### Strict Mode

Make React extra strict where it blocks certain errors instead of running anyway.

```
import { StrictMode } from 'react';
```

Wrap your app in `<StrictMode>` tags (e.g. the entire page component).

### Dev Tools

Browser extension. Provides a component view and profiler.

Can be installed for Chrome, Firefox and Edge.  
[Main Link](https://react.dev/learn/react-developer-tools)

Links for individual browsers:
- [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil)

## Custom Hooks

You can make your own hooks.

For example, a Pizza of the Day hook (`usePizzaOfTheDay`), which encapsulates all the logic for getting the current Pizza of the Day.

Create `PizzaOfTheDay.jsx` component.

```
import { userPizzaOfTheDay } from './usePizzaOfTheDay';

const intl = new Intl.NumberFormat("en-MY", {
  style: "currency",
  currency: "MYR",
})

function PizzaOfTheDay() {
  const pizzaOfTheDay = usePizzaOfTheDay();

  if (!pizzaOfTheDay) {
    return <div>Loading</div>
  }

  return (
    <div className="pizza-of-the-day">
      <h2>Pizza of the Day</h2>
      <div>
        <div className="pizza-of-the-day-info">
          <h3>{pizzaOfTheDay.name}</h3>
          <p>{pizzaOfTheDay.description}</p>
          <p className="pizza-of-the-day-price">
            From: {intl.format(pizzaOfTheDay.size.S)}
          </p>
        </div>
        <img
          src={pizzaOfTheDay.image}
          alt={pizzaOfTheDay.name}
          className="pizza-of-the-day-image"
        />
      </div>
    </div>
  );
}

export default {
  PizzaOfTheDay,
}
```

Then create the `usePizzaOfTheDay.js` file:

```
import { useEffect, useState } from "react";

export function usePizzaOfTheDay() {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const response = await fetch("/api/pizza-of-the-day");
      const data = await response.json;
      setPizzaOfTheDay(data);
    }

    fetchPizzaOfTheDay();
  }, [])

  return pizzaOfTheDay;
}
```

The custom hook just calls the useState hook with the help of useEffect. It is essentially a function that returns the current Pizza of the Day.

Finally, don't forget to use the `PizzaOfTheDay` component in the order page. In this case, we put it in the `App.jsx` as it will be shown on all pages.

### Common questions

1. When to use Custom Hooks?  
    Depends (no right answer).  
    **Extreme side**: Never put an `useEffect` in a component, it should always be in a custom hook. This makes it easy to test/debug.
    **Other side**: Never make custom hooks, always do it in the components.
    **Balanced view**: Most `useEffect` hooks should be in custom hooks.
2. What happens when the network call takes time in the custom hook?
    In this case, it returns null first. Later on it will be updated when a response is received.
3. Why custom hooks are camel case?
    To differentiate itself from components, which are usually title case.

## `useDebugValue` Hook

Useful for debugging hooks. Shows hook values in the React browser dev tools (Components section).

Example:

```
import { useDebugValue } from 'react';

...
useDebugValue(pizzaOfTheDay ? `${pizzaOfTheDay.name}` : "loading...")
```

In the React Dev Tool's components tab, you can view the specified debug hook variable under the hooks section of a component.

## Handling User Input

1. Import a `Cart` component (will be created later).
2. Create a hook for the `Cart` (cart & setCart).
3. Set the form's `onSubmit` as the following:

    ```
    onSubmit={(e) => {
      e.preventDefault();
      setCart([
        ...cart,
        {
          pizza: selectedPizza,
          size: pizzaSize,
          price: price
        },
      ]);
    }}
    ```

    Why use `onSubmit` in the form instead of `onClick` in the submit button?  
    **`onSubmit` works when the user uses the ENTER key to submit the form**

4. Display cart unless loading:

    ```
    // after the form
    {
      loading ? <h2>Loading...</h2> : <Cart cart={cart} />
    }
    ```

5. Create `Cart.jsx` component file:

    ```
    const intl = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    export default function Cart({ cart, checkout }) {
      let total = 0;
      for (let i = 0; i < cart.length; i++) {
        const current = cart[i];
        total += current.pizza.sizes[current.size];
      }

      return (
        <div className="cart">
          <h2>Cart</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <span className="size">{item.size} </span>
                <span className="type">{item.pizza.name} </span>
                <span className="price">{item.price} </span>
              </li>
            ))}
          </ul>
          <p>Total: {intl.format(total)}</p>
          <button onClick={checkout}>Checkout</button>
        </div>
      );
    }
    ```

## Cart Checkout

1. Create checkout function in `Order.jsx`:

    ```
    async function checkout() {
      setLoading(true);

      await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart }),
      });

      setCart([]);
      setLoading(false);
    }
    ```

2. Pass the checkout function to the `Cart` component as a prop:

    ```
    <Cart checkout={checkout} ... />
    ```

**Something about passing down props into components**:

- Variables passed down into components as props cannot me changed (immutable). E.g. the cart passed down from the parrent component into the `Cart` component cannot be modified from within the `Cart` component. **It makes a copy instead**.

- Functions however live in the parrent, and can be invoked from the child component if passed down to it as a prop. Therefore you can use this to your advantage to manipulate data in the parent component.

## `useContext` Hook

**Context** - Simplifies writing code but increases maintenance.  
Prevents the prop-drilling problem where props are passed down through multiple child components.  
However, are is like a black hole where you store and receive information, which can be dangerous when it comes to debugging later on.

It is okay to use prop-drilling, especially if it is only being used in one place. Only use contexts when the data has to be retrievable from multiple places.

Example - App-level states:

- **User Account** - User is an app level state. Different components can access user information through contexts anywhere.

- **App Theme** - Used throughout the app.

Also useful to save data like shopping carts, which are brough across multiple pages.

### Implementing Shopping Cart with `useContext`

1. Create `Header.jsx`:

    ```
    export default function Header() {
      return (
        <nav>
          <h1 className="logo">Padre Gino's Pizza</h1>
          <div className="nav-cart">
            🛒<span className="nav-cart-number">5</span> 
          </div>
        </nav>
      )
    }
    ```
    
2. Import `<Header />` into `App.jsx` (above `<Order />`).

3. Instead of having a cart useState in `App.jsx` and passing it down to both `<Header />` and `<Order />` as props (which can get overwhelming), we can use `useContext` instead. **Create a file named `contexts.jsx`**:

    ```
    import { createContext } from "react";

    export const CartContext = createContext([ [], function(){} ]);
    ```

    `[ [], function(){} ]` is OPTIONAL in JavaScript, but it is good practice to include when one day the codebase is switched to TypeScript. `[ [], function(){} ]` is the structure of Hooks.

4. Wrap the App in `App.tsx` within `<CartContext.provider>`. You can select which parts of the app to be within the context by simply deciding what components are nested in it.

5. Define a new `cartHook` variable and set it to `useState([])`. Now cartHook can be accessed by components in the same context.

6. Now update `Order.jsx` to use `useContext(CartContext)` for accessing and setting cart items:

    ```
    import { CartContext } from './contexts'
    ...
    const [cart, setCart] = useContext(CartContext);
    ...
    ```

7. Do the same for `Header.jsx`:

    ```
    import { CartContext } from "./contexts"
    import { useContext } from "react"
    ...

    export default function Header() {
      const [cart] = useContext(CartContext);
      ...
            🛒<span className="nav-cart-number">{cart.length}</span> 
            ...
    ```
  