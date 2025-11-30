function ContactItem({ title, children }) {
  return (
    <article className="contact-item">
      <h3>{title}</h3>
      {children}
    </article>
  );
}

export default ContactItem;

