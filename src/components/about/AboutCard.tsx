type AboutCardProps = {
  title: string;
  content: string;
  dark?: boolean;
};

export default function AboutCard({
  title,
  content,
  dark,
}: AboutCardProps) {
  return (
    <article className={`about-card ${dark ? "dark-card" : ""}`}>
      <h2>{title}</h2>

      <p>{content}</p>
    </article>
  );
}