// src/app/components/SampleTemplates.tsx
import styles from "./SampleTemplates.module.css";

export default function SampleTemplates() {
  return (
    <section className={styles.sampleTemplates}>
      <h2>Sample OMs created with our platform</h2>
      <div className={styles.templatesGrid}>
        <div className={styles.template}>
          <h3>Retail OM</h3>
          <p>Details about Retail OM.</p>
        </div>
        <div className={styles.template}>
          <h3>Multi-Family OM</h3>
          <p>Details about Multi-Family OM.</p>
        </div>
        <div className={styles.template}>
          <h3>Office OM</h3>
          <p>Details about Office OM.</p>
        </div>
      </div>
    </section>
  );
}
