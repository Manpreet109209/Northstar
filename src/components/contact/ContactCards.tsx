import { contactCards } from "./contactData";
import ContactCard from "./ContactCard";

export default function ContactCards() {
  return (
    <div className="contact-grid">
      {contactCards.map((item) => (
        <ContactCard
          key={item.title}
          title={item.title}
          value={item.value}
          description={item.description}
          link={item.link}
        />
      ))}
    </div>
  );
}