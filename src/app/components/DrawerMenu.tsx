// src/app/components/DrawerMenu.tsx
"use client";

import React, { useState } from "react";
import styles from "./DrawerMenu.module.css";

export default function DrawerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={styles.menuButton} onClick={toggleDrawer}>
        ☰
      </button>
      <div className={`${styles.drawer} ${isOpen ? styles.open : ""}`}>
        <div className={styles.drawerContent}>
          <div className={styles.logo}>SellCRE.ai</div>
          <nav>
            <a href="#features" className={styles.link}>
              Features
            </a>
            <a href="#pricing" className={styles.link}>
              Pricing
            </a>
            <a href="#login" className={styles.link}>
              <span role="img" aria-label="lock">
                🔒
              </span>{" "}
              Login
            </a>
          </nav>
          <button className={styles.ctaButton}>Try For Free</button>
        </div>
      </div>
      <div
        className={`${styles.overlay} ${isOpen ? styles.showOverlay : ""}`}
        onClick={toggleDrawer}
      ></div>
    </>
  );
}
