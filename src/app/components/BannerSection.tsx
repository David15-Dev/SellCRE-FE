// src/app/components/BannerSection.tsx
import styles from "./BannerSection.module.css";

export default function BannerSection() {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Sell CRE Faster with OMs & Ads created in minutes
        </h1>
        <p className={styles.subtitle}>
          Create beautiful Commercial Real Estate Offering Memorandums, Flyers &
          Ads in minutes with our AI-powered platform
        </p>
        <div className={styles.buttons}>
          <button className={styles.tryButton}>
            Try for Free
            <img
              src="./rightArrow.svg"
              alt="Right Arrow"
              className={styles.icon}
            />
          </button>
          <button className={styles.demoButton}>
            <img
              src="./play.svg"
              alt="Play Icon"
              className={styles.icon}
              style={{ marginRight: "10px" }}
            />
            Watch Demo
          </button>
        </div>
      </div>
      <div className={styles.imagePane}>
        <img src="./banner.png" alt="Banner" className={styles.bannerImage} />
      </div>
    </section>
  );
}
