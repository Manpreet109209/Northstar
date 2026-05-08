export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-container">
        {/* badge */}
        <div className="about-badge">
          🇮🇳 Punjab, India • Self-Directed Student
        </div>

        {/* heading */}
        <h1>
          Building software systems while rebuilding my own path.
        </h1>

        {/* desc */}
        <p className="about-hero-description">
          I’m Manpreet, a self-taught developer and NIOS student
          currently preparing for Computer Science studies abroad.
          <br />
          <br />
          After leaving a school system that cared more about
          fees than actual education, I started building my own
          structure:
          mathematics, physics, programming, backend engineering,
          and real-world software projects.
          <br />
          <br />
          Somewhere between solving calculus problems, deploying
          Node.js apps, and debugging things at 2AM, this slowly
          became more than “learning code.”
          <br />
          It became a long-term plan for independence.
        </p>
      </div>
    </section>
  );
}