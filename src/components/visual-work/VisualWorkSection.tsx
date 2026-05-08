import "./VisualWork.css";

import VisualWorkHeader from "./VisualWorkHeader";
import VisualWorkGrid from "./VisualWorkGrid";

export default function VisualWorkSection() {
  return (
    <section className="visual-section">
      <div className="visual-container">
        <VisualWorkHeader />

        <VisualWorkGrid />
      </div>
    </section>
  );
}