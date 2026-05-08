import SkillCard from "./SkillCard";
import { skills } from "./skillsData";

export default function SkillsGrid() {
  return (
    <section className="skills-grid-section">
      <div className="skills-container">
        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              items={skill.items}
              description={skill.description}
              dark={skill.dark}
            />
          ))}
        </div>
      </div>
    </section>
  );
}