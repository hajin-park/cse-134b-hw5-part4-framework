function EducationEntry({ degree, institution, expectedDateTime, expectedDisplay, gpa }) {
  return (
    <article className="education-entry">
      <h3>{degree}</h3>
      <p>
        <strong>{institution}</strong><br />
        Expected: <time dateTime={expectedDateTime}>{expectedDisplay}</time><br />
        <b>GPA:</b> {gpa}
      </p>
    </article>
  );
}

export default EducationEntry;

