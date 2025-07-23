import { useNavigate } from "react-router-dom";
import styles from "./Cart.module.css";

export function Cart({ cart, setCart }) {
  const navigate = useNavigate();

  // Agrupa produtos por id e conta quantidades
  const grouped = cart.reduce((acc, item) => {
    acc[item.id] = acc[item.id] || { ...item, quantity: 0 };
    acc[item.id].quantity += 1;
    return acc;
  }, {});

  const products = Object.values(grouped);

  // Adiciona um produto ao carrinho
  const handleQuantity = (id, delta) => {
    setCart((prev) => {
      if (delta === 1) {
        // Adiciona mais um produto desse id
        const productToAdd = prev.find((p) => p.id === id);
        return [...prev, productToAdd];
      } else {
        // Remove UM produto desse id
        const indexToRemove = prev.findIndex((p) => p.id === id);
        if (indexToRemove !== -1) {
          const copy = [...prev];
          copy.splice(indexToRemove, 1);
          return copy;
        }
        return prev;
      }
    });
  };

  const handleRemoveAll = () => setCart([]);

  const handleRemoveProduct = (id) => {
    setCart((prev) => prev.filter((product) => product.id !== id));
  };

  const total = products.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartSection}>
        <h2>🛒 Produtos</h2>
        <button className={styles.removeAll} onClick={handleRemoveAll}>
          Remover todos os produtos
        </button>
        {products.length === 0 ? (
          <div style={{ textAlign: "center", color: "var(--primary-medium)", fontWeight: "bold", fontSize: "2rem", margin: "3rem 0" }}>
             Carrinho vazio
          </div>
        ) : (
          <ul className={styles.productList}>
            {products.map((product) => (
              <li key={product.id} className={styles.productItem}>
                <img src={product.thumbnail} alt={product.title} />
                <h3 style={{ margin: "0 1rem 0 0", minWidth: "120px" }}>{product.title}</h3>
                <div className={styles.productInfo}>
                  <p>{product.description}</p>
                  <div className={styles.quantityControl}>
                    <button
                      onClick={() => handleQuantity(product.id, -1)}
                      disabled={product.quantity === 1}
                    >-</button>
                    <span>{product.quantity}</span>
                    <button
                      onClick={() => handleQuantity(product.id, 1)}
                    >+</button>
                    <button
                      className={styles.removeBtn}
                      onClick={() => handleRemoveProduct(product.id)}
                      title="Remover este produto"
                    >🗑️</button>
                  </div>
                </div>
                <div className={styles.priceInfo}>
                  <span className={styles.priceLabel}>Preço:</span>
                  <span className={styles.priceValue}>
                    R$ {(product.price * product.quantity).toFixed(2)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.summarySection}>
        <h3>Resumo do Pedido</h3>
        <div className={styles.summaryRow}>
          <span>Valor total:</span>
          <span>R$ {total.toFixed(2)}</span>
        </div>
        <button className={styles.continueBtn}>Continuar</button>
        <button
          className={styles.backBtn}
          onClick={() => navigate(-1)}
        >
          Voltar
        </button>
      </div>
    </div>
  );
}