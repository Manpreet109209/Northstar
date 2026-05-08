import "../components/about/About.css";

import AboutHero from "../components/about/AboutHero";
import AboutGrid from "../components/about/AboutGrid";
import AboutPhilosophy from "../components/about/AboutPhilosophy";

export default function About() {
  return (
    <main className="about-page">
      <AboutHero />
      <AboutGrid />
      <AboutPhilosophy />
    </main>
  );
}