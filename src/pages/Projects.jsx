import Layout from '../components/Layout';

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
        <article className="project-card">
          <header>
            <h3>Spotify Translator</h3>
            <p className="project-date"><time dateTime="2024-03">March 2024</time> - Present</p>
          </header>
          <section>
            <h4>Description</h4>
            <p>
              Building a lyric translation/transcription tool publicly available
              on the PyPi python package platform using the Spotify Web API,
              OpenAI's Whisper Speech Recognition model, and Meta's Demucs Music
              Source Separation model.
            </p>
          </section>
          <section>
            <h4>Tech Stack</h4>
            <ul>
              <li>Python</li>
              <li>Spotify Web API</li>
              <li>OpenAI Whisper</li>
              <li>Meta Demucs</li>
              <li>PyPi Package Distribution</li>
            </ul>
          </section>
          <footer className="project-links">
            <a
              href="https://pypi.org/project/spotify-translator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on PyPi
            </a>
          </footer>
        </article>

        <article className="project-card">
          <header>
            <h3>Based Math Game</h3>
            <p className="project-date"><time dateTime="2024-01">January 2024</time> - Present</p>
          </header>
          <section>
            <h4>Description</h4>
            <p>
              A speed quiz-style math game website for practicing base conversion
              and other operations on binary forms.
            </p>
          </section>
          <section>
            <h4>Tech Stack</h4>
            <ul>
              <li>React.js</li>
              <li>ShadCN UI</li>
              <li>Tailwind CSS</li>
              <li>Firebase</li>
            </ul>
          </section>
          <footer className="project-links">
            <a href="https://github.com/hajin-park/based-math-game" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            <a href="https://basedmathgame.com" target="_blank" rel="noopener noreferrer">View live site</a>
          </footer>
        </article>
      </section>
    </Layout>
  );
}

export default Projects;

