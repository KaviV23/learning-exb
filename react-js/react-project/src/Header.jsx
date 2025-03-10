import { CartContext } from "./contexts"
import { useContext } from "react"

export default function Header() {
  const [cart] = useContext(CartContext);

  return (
    <nav>
      <h1 className="logo">Padre Gino's Pizza</h1>
      <div className="nav-cart">
        🛒<span className="nav-cart-number">{cart.length}</span> 
      </div>
    </nav>
  )
}