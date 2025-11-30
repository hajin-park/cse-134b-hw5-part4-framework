import Layout from '../components/Layout';

function Resume() {
  return (
    <Layout>
      <header>
        <h1>Resume</h1>
      </header>

      <section>
        <h2>Download Resume</h2>
        <p>
          <a href="/Hajin Park_Resume.pdf" download>
            Download Resume (PDF)
          </a>
        </p>
      </section>

      <section>
        <h2>Resume Preview</h2>
        <iframe
          src="/Hajin Park_Resume.pdf"
          width="100%"
          height="800"
          title="Hajin Park Resume PDF"
        >
          <p>
            Your browser does not support iframes.{' '}
            <a href="/Hajin Park_Resume.pdf">
              Click here to download the PDF
            </a>
            .
          </p>
        </iframe>
      </section>
    </Layout>
  );
}

export default Resume;

