import AboutCard from "./AboutCard";
import { aboutCards } from "./aboutData";

export default function AboutGrid() {
  return (
    <section className="about-grid-section">
      <div className="about-container">
        <div className="about-grid">
          {aboutCards.map((card) => (
            <AboutCard
              key={card.title}
              title={card.title}
              content={card.content}
              dark={card.dark}
            />
          ))}
        </div>
      </div>
    </section>
  );
}