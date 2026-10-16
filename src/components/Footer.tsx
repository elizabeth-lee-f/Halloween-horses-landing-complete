import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.content}>
        <div className={styles.section}>
          <h3 className={styles.logo}>🎃 Мистические Скакуны</h3>
          <p>Путешествие в мир ночных легенд</p>
        </div>
        <div className={styles.section}>
          <h4>Навигация</h4>
          <ul>
            <li><a href="#hero">Главная</a></li>
            <li><a href="#breeds">Легенды</a></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4>Осторожно</h4>
          <ul>
            <li><a href="#">Не оборачивайтесь</a></li>
            <li><a href="#">Правила выживания</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        © 2026 Мистические Скакуны. Сделано с ужасом и любовью 🕸️
      </div>
    </footer>
  );
}