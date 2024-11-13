// src/app/components/Header.tsx
"use client";

import styles from "./Header.module.css";
import DrawerMenu from "./DrawerMenu";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src="./logo.svg"
          alt="SellCRE.ai Logo"
          className={styles.logoImage}
        />{" "}
        {/* Update the logo path */}
      </div>
      <div style={{ display: "flex" }}>
        <nav className={styles.nav}>
          <a href="#features" className={styles.link}>
            Features
          </a>
          <a href="#pricing" className={styles.link}>
            Pricing
          </a>
          <a href="#login" className={styles.link}>
            <span role="img" aria-label="lock" style={{ marginRight: "2px" }}>
              🔒
            </span>{" "}
            Login
          </a>
        </nav>
        <button className={styles.ctaButton}>Try For Free</button>
      </div>

      {/* For mobile, show DrawerMenu */}
      <div className={styles.mobileMenu}>
        <DrawerMenu />
      </div>
    </header>
  );
}
