import "../components/experience/Experience.css";

import ExperienceHero from "../components/experience/ExperienceHero";
import ExperienceTimeline from "../components/experience/ExperienceTimeline";

export default function Experience() {
  return (
    <main className="experience-page">
      <ExperienceHero />
      <ExperienceTimeline />
    </main>
  );
}