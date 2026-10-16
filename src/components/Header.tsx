import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}> Star Stable Halloween Horses</div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><a href="#hero">Главная</a></li>
          <li><a href="#breeds">Легенды</a></li>
          <li><a href="#footer">Контакты</a></li>
        </ul>
      </nav>
    </header>
  );
}