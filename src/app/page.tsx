// src/app/page.tsx
import Header from "./components/Header";
import BannerSection from "./components/BannerSection";
import PropertyTypes from "./components/PropertyTypes";
import SampleTemplates from "./components/SampleTemplates";

export default function Home() {
  return (
    <>
      <Header />
      <BannerSection />
      <main>
        <PropertyTypes />
        <SampleTemplates />
      </main>
    </>
  );
}
