import styles from "./Main.module.css";

export default function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {[0, 1, 2, 3, 4].map((i) => (
          <article key={i} className={styles.card}>
            <div className={styles.imagePlaceholder}></div>
            <h2 className={styles.cardTitle}>My Text {i}</h2>
            <p className={styles.cardText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
