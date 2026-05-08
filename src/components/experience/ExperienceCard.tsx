type ExperienceCardProps = {
  title: string;
  period: string;
  description: string;
  points: string[];
  dark?: boolean;
};

export default function ExperienceCard({
  title,
  period,
  description,
  points,
  dark,
}: ExperienceCardProps) {
  return (
    <article
      className={`experience-card ${
        dark ? "dark-experience-card" : ""
      }`}
    >
      <div className="experience-top">
        <h2>{title}</h2>

        <span>{period}</span>
      </div>

      <p className="experience-text">{description}</p>

      <ul className="experience-points">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}