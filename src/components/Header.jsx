import { ShoppingBasket } from "lucide-react";
import styles from "./Header.module.css";
import { Link } from "react-router";

export function Header({ cart }) {
  const quantidade = cart.length;
  const valorTotal = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.link}><h1>TRJ MEGASTORE</h1></Link>
      <Link to="/cart" className={styles.link}>
        <div className={styles.cartInfo}>
          {quantidade} produto{quantidade !== 1 ? "s" : ""} no 🛒: ${valorTotal.toFixed(2)}
        </div>
      </Link>
    </div>
  );
}