type TechBadgeProps = {
  name: string;
};

export default function TechBadge({
  name,
}: TechBadgeProps) {
  return <span className="tech-badge">{name}</span>;
}