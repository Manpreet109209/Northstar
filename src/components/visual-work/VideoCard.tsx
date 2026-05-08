import VideoTag from "./VideoTag";

type VideoCardProps = {
  edit: {
    id: string;
    title: string;
    description: string;
  };
};

export default function VideoCard({
  edit,
}: VideoCardProps) {
  return (
    <article className="video-card">
      {/* video */}
      <iframe
        src={`https://www.youtube.com/embed/${edit.id}`}
        title={edit.title}
        allowFullScreen
        className="video-frame"
      />

      {/* content */}
      <div className="video-content">
        <h3>{edit.title}</h3>

        <p>{edit.description}</p>

        <VideoTag text="Short-form Editing" />
      </div>
    </article>
  );
}