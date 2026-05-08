import ExperienceCard from "./ExperienceCard";
import { experiences } from "./experienceData";

export default function ExperienceTimeline() {
  return (
    <section className="experience-section">
      <div className="experience-container">
        <div className="experience-grid">
          {experiences.map((item) => (
            <ExperienceCard
              key={item.title}
              title={item.title}
              period={item.period}
              description={item.description}
              points={item.points}
              dark={item.dark}
            />
          ))}
        </div>
      </div>
    </section>
  );
}