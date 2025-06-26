import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoGroup}>
        <img src="/tempo.png" alt="Tempo" className={styles.logo} />
        <h1 className={styles.title}>Sorteador de número</h1>
      </div>
    </header>
  );
}
