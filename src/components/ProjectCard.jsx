function ProjectCard({ title, dateTime, dateDisplay, endDate, description, techStack, links }) {
  return (
    <article className="project-card">
      <header>
        <h3>{title}</h3>
        <p className="project-date">
          <time dateTime={dateTime}>{dateDisplay}</time> - {endDate}
        </p>
      </header>
      <section>
        <h4>Description</h4>
        <p>{description}</p>
      </section>
      <section>
        <h4>Tech Stack</h4>
        <ul>
          {techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </section>
      <footer className="project-links">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.text}
          </a>
        ))}
      </footer>
    </article>
  );
}

export default ProjectCard;

