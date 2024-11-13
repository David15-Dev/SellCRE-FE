// src/app/page.tsx
import Header from "./components/Header";
import PropertyTypes from "./components/PropertyTypes";
import SampleTemplates from "./components/SampleTemplates";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <PropertyTypes />
        <SampleTemplates />
      </main>
    </>
  );
}
