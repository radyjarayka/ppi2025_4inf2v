import { ShoppingBasket } from "lucide-react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export function Header({ cart }) {
  // Conta apenas produtos diferentes
  const quantidade = new Set(cart.map(item => item.id)).size;
  const valorTotal = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.link}>
        <h1>TRJ MEGASTORE</h1>
      </Link>
      <Link to="/cart" className={styles.link}>
        <div className={styles.cartInfo}>
          <div className={styles.cartIconWrapper}>
            <ShoppingBasket size={36} />
            {quantidade > 0 && (
              <span className={styles.cartBadge}>{quantidade}</span>
            )}
          </div>
          <span className={styles.cartText}>
            {quantidade} produto{quantidade !== 1 ? "s" : ""} no carrinho<br />
            <span className={styles.cartTotal}>R$ {valorTotal.toFixed(2)}</span>
          </span>
        </div>
      </Link>
    </div>
  );
}