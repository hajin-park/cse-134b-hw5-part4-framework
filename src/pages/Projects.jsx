import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

const projectsData = [
  {
    title: 'Spotify Translator',
    dateTime: '2024-03',
    dateDisplay: 'March 2024',
    endDate: 'Present',
    description:
      "Building a lyric translation/transcription tool publicly available on the PyPi python package platform using the Spotify Web API, OpenAI's Whisper Speech Recognition model, and Meta's Demucs Music Source Separation model.",
    techStack: [
      'Python',
      'Spotify Web API',
      'OpenAI Whisper',
      'Meta Demucs',
      'PyPi Package Distribution',
    ],
    links: [
      { url: 'https://pypi.org/project/spotify-translator/', text: 'View on PyPi' },
    ],
  },
  {
    title: 'Based Math Game',
    dateTime: '2024-01',
    dateDisplay: 'January 2024',
    endDate: 'Present',
    description:
      'A speed quiz-style math game website for practicing base conversion and other operations on binary forms.',
    techStack: ['React.js', 'ShadCN UI', 'Tailwind CSS', 'Firebase'],
    links: [
      { url: 'https://github.com/hajin-park/based-math-game', text: 'GitHub Repository' },
      { url: 'https://basedmathgame.com', text: 'View live site' },
    ],
  },
];

function Projects() {
  return (
    <Layout>
      <header>
        <h1>Projects</h1>
      </header>

      <p>
        Below are some of the projects I've worked on, showcasing my skills in
        <strong> software development</strong>, <em>machine learning</em>, and
        <b> web technologies</b>.
      </p>

      <section className="project-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </section>
    </Layout>
  );
}

export default Projects;

