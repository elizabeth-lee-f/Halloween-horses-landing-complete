import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.content}>
        <h1 className={styles.title}>Они выходят из тумана...</h1>
        <p className={styles.subtitle}>
          Шесть проклятых и благословлённых пород. Наведите на карточку, если осмелитесь узнать их тайну.
        </p>
        <a href="#breeds" className={styles.cta}>
          Войти в туман 🕸️
        </a>
      </div>
    </section>
  );
}