function SkillGroup({ title, skills, listType = 'badges' }) {
  return (
    <article className="skill-group">
      <h3>{title}</h3>
      {listType === 'badges' ? (
        <p className="skill-list">
          {skills.map((skill, index) => (
            <skill-badge key={index} category={skill.category}>
              {skill.name}
            </skill-badge>
          ))}
        </p>
      ) : (
        <ol>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ol>
      )}
    </article>
  );
}

export default SkillGroup;

