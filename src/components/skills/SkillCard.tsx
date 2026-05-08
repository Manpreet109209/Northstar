type SkillCardProps = {
  title: string;
  items: string[];
  description: string;
  dark?: boolean;
};

export default function SkillCard({
  title,
  items,
  description,
  dark,
}: SkillCardProps) {
  return (
    <article className={`skill-card ${dark ? "dark-skill-card" : ""}`}>
      <h2>{title}</h2>

      <div className="skill-tags">
        {items.map((item) => (
          <span key={item} className="skill-tag">
            {item}
          </span>
        ))}
      </div>

      <p>{description}</p>
    </article>
  );
}