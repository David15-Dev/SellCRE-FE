// src/app/components/Header.tsx
import styles from "./Header.module.css";
import DrawerMenu from "./DrawerMenu";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>SellCRE.ai</div>
      <nav className={styles.nav}>
        <a href="#features" className={styles.link}>
          Features
        </a>
        <a href="#pricing" className={styles.link}>
          Pricing
        </a>
        <a href="#login" className={styles.link}>
          Login
        </a>
        <button className={styles.cta}>Try for Free</button>
      </nav>
      <div className={styles.mobileMenu}>
        <DrawerMenu />
      </div>
    </header>
  );
}
