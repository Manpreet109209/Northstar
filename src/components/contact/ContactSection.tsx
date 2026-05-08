import "./Contact.css";

import ContactHero from "./ContactHero";
import ContactCards from "./ContactCards";
import ContactAvailability from "./ContactAvailability";

export default function ContactSection() {
  return (
    <main className="contact-page">
      <ContactHero />

      <section className="contact-cards-section">
        <div className="contact-container">
          <ContactCards />
        </div>
      </section>

      <ContactAvailability />
    </main>
  );
}