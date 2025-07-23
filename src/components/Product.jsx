import { useState } from "react";
import styles from "./Product.module.css";

export function Product({ product, addToCart }) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
    addToCart(product);
    setTimeout(() => setClicked(false), 200);
  }

  return (
    <div key={product.id} className={styles.productCard}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.productImage}
      />
      <h2 className={styles.productTitle}>{product.title}</h2>
      <p className={styles.productDescription}>{product.description}</p>
      <p className={styles.productPrice}>${product.price}</p>
      <button
        onClick={handleClick}
        className={`${styles.productButton} ${clicked ? styles.clicked : ""}`}
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}