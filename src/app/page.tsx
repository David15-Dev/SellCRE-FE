// src/app/page.tsx
import Header from "./components/Header";
import PropertyTypes from "./components/PropertyTypes";
import SampleTemplates from "./components/SampleTemplates";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <PropertyTypes />
        <SampleTemplates />
      </main>
      <Footer />
    </>
  );
}
