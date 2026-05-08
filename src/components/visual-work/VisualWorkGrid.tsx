import { edits } from "./visualWorkData";
import VideoCard from "./VideoCard";

export default function VisualWorkGrid() {
  return (
    <div className="visual-grid">
      {edits.map((edit) => (
        <VideoCard
          key={edit.id}
          edit={edit}
        />
      ))}
    </div>
  );
}