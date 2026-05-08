import "../components/skills/Skills.css";

import SkillsHero from "../components/skills/SkillsHero";
import SkillsGrid from "../components/skills/SkillsGrid";

export default function Skills() {
  return (
    <main className="skills-page">
      <SkillsHero />
      <SkillsGrid />
    </main>
  );
}