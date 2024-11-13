// src/app/components/PropertyTypes.tsx
import styles from "./PropertyTypes.module.css";

export default function PropertyTypes() {
  const propertyTypes = [
    { name: "Retail", icon: "./retail.svg" },
    { name: "Multi-family", icon: "./family.svg" },
    { name: "Office", icon: "./office.svg" },
    { name: "Industrial", icon: "./industry.svg" },
    { name: "Hotel", icon: "./hotel.svg" },
    { name: "Land", icon: "./land.svg" },
  ];

  return (
    <section className={styles.propertyTypes}>
      <p className={styles.subtitle}>Create OMs and Ads For</p>
      <h2 className={styles.title}>Various Real Estate Property Types</h2>
      <div className={styles.typesGrid}>
        {propertyTypes.map((type) => (
          <div key={type.name} className={styles.typeCard}>
            <img
              src={type.icon}
              alt={`${type.name} icon`}
              className={styles.icon}
            />
            <p className={styles.label}>{type.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
