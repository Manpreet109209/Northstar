type VideoTagProps = {
  text: string;
};

export default function VideoTag({
  text,
}: VideoTagProps) {
  return <div className="video-tag">{text}</div>;
}