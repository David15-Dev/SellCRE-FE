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
      {/* Menu button to open and close the drawer */}
      <button className={styles.menuButton} onClick={toggleDrawer}>
        ☰ {/* Menu icon */}
      </button>

      {/* Drawer content and overlay */}
      <div className={`${styles.drawer} ${isOpen ? styles.open : ""}`}>
        <div className={styles.drawerContent}>
          {/* Use SVG logo here */}
          <div className={styles.logo}>
            <img
              src="./logo.svg"
              alt="SellCRE.ai Logo"
              className={styles.logoImage}
            />
          </div>
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

      {/* Overlay to close the drawer when clicked */}
      {isOpen && <div className={styles.overlay} onClick={toggleDrawer}></div>}
    </>
  );
}
