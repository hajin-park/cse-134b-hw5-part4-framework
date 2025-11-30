function ExperienceEntry({ title, company, startDateTime, startDisplay, endDateTime, endDisplay, responsibilities }) {
  return (
    <article className="experience-entry">
      <header>
        <h3>{title}</h3>
        <p>
          <strong>{company}</strong> |{' '}
          <time dateTime={startDateTime}>{startDisplay}</time> - <time dateTime={endDateTime}>{endDisplay}</time>
        </p>
      </header>
      <ul>
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default ExperienceEntry;

