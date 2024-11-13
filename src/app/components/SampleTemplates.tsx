// src/app/components/SampleTemplates.tsx
import styles from "./SampleTemplates.module.css";

export default function SampleTemplates() {
  const templates = [
    {
      title: "Retail OM",
      description: "strip centers, street retail, vehicle related, and more.",
      image: "./bg1.png",
      buttonText: "View Sample Template",
      overlayTitle: "Crowder Plaza",
      overlaySubtitle: "7709 Crowder Blvd, New Orleans, LA",
    },
    {
      title: "Multi-Family OM",
      description: "garden, low-rise, mid-rise, high-rise.",
      image: "./bg2.png",
      buttonText: "View Sample Template",
      overlayTitle: "Riverbend Apartments",
      overlaySubtitle: "381 Fairway Pass, W. Memphis, AR",
    },
    {
      title: "Office OM",
      description: "all classes of office buildings, loft/creative, medical.",
      image: "./bg3.png",
      buttonText: "View Sample Template",
      overlayTitle: "Southfield Office",
      overlaySubtitle: "656 East Dr, Miami Springs, FL 33166",
    },
  ];

  return (
    <section className={styles.sampleTemplates}>
      <h2 className={styles.title}>Sample OMs created with our platform</h2>
      <div className={styles.templatesGrid}>
        {templates.map((template, index) => (
          <div key={index} className={styles.templateCard}>
            <div className={styles.imageWrapper}>
              <img
                src={template.image}
                alt={template.title}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <h3 className={styles.overlayTitle}>{template.overlayTitle}</h3>
                <p className={styles.overlaySubtitle}>
                  {template.overlaySubtitle}
                </p>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{template.title}</h3>
              <p className={styles.description}>{template.description}</p>
              <button className={styles.ctaButton}>
                {template.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
