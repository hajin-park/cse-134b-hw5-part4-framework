import Layout from '../components/Layout';
import ExperienceEntry from '../components/ExperienceEntry';
import EducationEntry from '../components/EducationEntry';
import SkillGroup from '../components/SkillGroup';

const professionalExperience = [
  {
    title: 'Software Engineer Intern',
    company: 'Intuit',
    startDateTime: '2025-06',
    startDisplay: 'June 2025',
    endDateTime: '2025-09',
    endDisplay: 'September 2025',
    responsibilities: [
      'Developed a multi-agent system with LangGraph/LangChain and RAG to automate integration test case and code generation from product requirement documents, reducing test coverage creation time from 2-4 months to under a week',
      'Enabled money movement testing capabilities in production environments by integrating third-party bank vendor REST APIs into internal developer testing tools, allowing 100+ product development teams to test in production on demand',
    ],
  },
  {
    title: 'Instructional Assistant',
    company: 'University of California',
    startDateTime: '2023-08',
    startDisplay: 'August 2023',
    endDateTime: '2024-08',
    endDisplay: 'August 2024',
    responsibilities: [
      'Assisted Calculus and Physics courses with 120+ undergraduate students by guiding problem sets during lecture and discussion sessions and holding weekly office hours, increasing student engagement and test scores',
      'Applied formal training from a semester-long course integrating education theory, teaching, and practice to create engaging learning environments across three semesters',
    ],
  },
  {
    title: 'Web Development Intern',
    company: 'Merced Senior Citizens, Inc.',
    startDateTime: '2023-06',
    startDisplay: 'June 2023',
    endDateTime: '2023-08',
    endDisplay: 'August 2023',
    responsibilities: [
      'Programmed and deployed a user-facing website using React.js, Tailwind CSS, and Firebase while achieving an annual upkeep cost of $12 for a community of 500+ active members',
      'Created a content management admin dashboard interface with user authentication to update a Firebase NoSQL database, enabling non-technical staff members to independently manage site content including images and text',
    ],
  },
];

const researchExperience = [
  {
    title: 'Software Development and Research Intern',
    company: 'Salk Institute for Biological Studies',
    startDateTime: '2024-06',
    startDisplay: 'June 2024',
    endDateTime: '2024-09',
    endDisplay: 'September 2024',
    responsibilities: [
      "Implemented bug fixes and new features for the lab's software system, a deep learning and computer vision-based application used by 15,000+ active users, following formal CI/CD and code review procedures",
      'Migrated data pipes and data loaders from TensorFlow to PyTorch and performed benchmarks on model training and inference pipelines, achieving over 20% model training time performance improvements',
    ],
  },
  {
    title: 'Software Research Fellow',
    company: 'Google ExploreCSR Program',
    startDateTime: '2022-11',
    startDisplay: 'November 2022',
    endDateTime: '2024-05',
    endDisplay: 'May 2024',
    responsibilities: [
      'Worked with faculty and students across three universities to study computational research, exploring applications of computer vision models (object detection, gesture recognition, pose estimation) in instructional settings',
      'Led a team of four undergraduates to develop a research poster and full-stack application on hand pose-estimation, presented at the 2023 UC STEM T3PN Conference and 2023 Greater Minds in STEM Conference',
    ],
  },
];

const educationData = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of California, San Diego',
    expectedDateTime: '2026-06',
    expectedDisplay: 'June 2026',
    gpa: '3.7',
  },
];

const skillsData = [
  {
    title: 'Languages',
    listType: 'badges',
    skills: [
      { name: 'Python', category: 'language' },
      { name: 'JavaScript', category: 'language' },
      { name: 'C', category: 'language' },
      { name: 'C++', category: 'language' },
      { name: 'Java', category: 'language' },
      { name: 'Rust', category: 'language' },
      { name: 'Go', category: 'language' },
      { name: 'PostgreSQL', category: 'language' },
      { name: 'HTML', category: 'language' },
      { name: 'CSS', category: 'language' },
      { name: 'LaTeX', category: 'language' },
    ],
  },
  {
    title: 'Technologies',
    listType: 'badges',
    skills: [
      { name: 'Agile/Scrum', category: 'technology' },
      { name: 'Jira', category: 'technology' },
      { name: 'Git', category: 'technology' },
      { name: 'React.js', category: 'framework' },
      { name: 'SQL', category: 'technology' },
      { name: 'NoSQL', category: 'technology' },
      { name: 'FastAPI', category: 'framework' },
      { name: 'Flask', category: 'framework' },
      { name: 'Node.js', category: 'framework' },
      { name: 'Firebase', category: 'technology' },
      { name: 'Agents', category: 'technology' },
      { name: 'PyTorch', category: 'framework' },
    ],
  },
  {
    title: 'Relevant Coursework',
    listType: 'ordered',
    skills: [
      'Data Structures and Algorithms',
      'Software Engineering',
      'AI: Probabilistic Models',
      'Machine Learning Algorithms',
      'Networked Systems',
      'Recommender Systems and Data Mining',
      'Database System Principles',
      'Compiler Construction',
      'Computer Organization and Assembly',
    ],
  },
];

function Career() {
  return (
    <Layout>
      <header>
        <h1>My career</h1>
      </header>

      <section className="experience-section">
        <h2>Professional Experience</h2>
        {professionalExperience.map((exp, index) => (
          <ExperienceEntry key={index} {...exp} />
        ))}
      </section>

      <section className="experience-section">
        <h2>Research Experience</h2>
        {researchExperience.map((exp, index) => (
          <ExperienceEntry key={index} {...exp} />
        ))}
      </section>

      <section className="education-section">
        <h2>Education</h2>
        {educationData.map((edu, index) => (
          <EducationEntry key={index} {...edu} />
        ))}
      </section>

      <section className="skills-section">
        <h2>Technical Skills</h2>
        {skillsData.map((group, index) => (
          <SkillGroup key={index} {...group} />
        ))}
      </section>

      <section>
        <h2>Leadership &amp; Volunteer Experience</h2>
        <ul>
          <li>
            <strong>Google Developer Student Club</strong> - Co-Founder,
            Outreach Coordinator
            <span> (August 2023 - May 2024)</span>
          </li>
          <li>
            <strong>Kappa Sigma Fraternity</strong> - Web Developer, Executive
            Committee
            <span> (April 2023 - January 2024)</span>
          </li>
          <li>
            <strong>Association for Computing Machinery</strong> - Campus
            Student Chapter AI Lead
            <span> (April 2023 - January 2024)</span>
          </li>
        </ul>
      </section>
    </Layout>
  );
}

export default Career;

