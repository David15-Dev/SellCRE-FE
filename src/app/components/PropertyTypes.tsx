// src/app/components/PropertyTypes.tsx
import styles from "./PropertyTypes.module.css";

export default function PropertyTypes() {
  return (
    <section className={styles.propertyTypes}>
      <h2>Various Real Estate Property Types</h2>
      <div className={styles.typesGrid}>
        <div className={styles.type}>Retail</div>
        <div className={styles.type}>Multi-Family</div>
        <div className={styles.type}>Office</div>
        <div className={styles.type}>Industrial</div>
        <div className={styles.type}>Hotel</div>
        <div className={styles.type}>Land</div>
      </div>
    </section>
  );
}
