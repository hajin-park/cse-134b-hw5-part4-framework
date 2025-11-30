import Layout from '../components/Layout';

function Home() {
  return (
    <Layout mainClassName="hero">
      <header>
        <h1>Hi, I'm Hajin!</h1>
      </header>

      {/* Profile Image and About Me Section */}
      <section className="hero-section">
        <picture className="headshot-container">
          <source
            type="image/webp"
            srcSet="
              /optimized/headshot/headshot-300.webp   300w,
              /optimized/headshot/headshot-600.webp   600w,
              /optimized/headshot/headshot-1200.webp 1200w
            "
            sizes="(max-width: 430px) 150px,
                           200px"
          />
          <source
            type="image/jpeg"
            srcSet="
              /optimized/headshot/headshot-300.jpeg   300w,
              /optimized/headshot/headshot-600.jpeg   600w,
              /optimized/headshot/headshot-1200.jpeg 1200w
            "
            sizes="(max-width: 430px) 150px,
                           200px"
          />
          <img
            src="/headshot.jpeg"
            alt="Professional headshot of my cat because I do not have a professional headshot."
            className="headshot-image"
            loading="eager"
          />
        </picture>
        <section className="about-me-text">
          <h2>About Me</h2>
          <p>
            Fourth year at the University of California, San Diego, pursuing a
            B.S. in Computer Science from the Jacobs School of Engineering.
          </p>
        </section>
      </section>

      {/* Social Media Links */}
      <section className="social-links">
        <a
          href="https://github.com/hajin-park"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/github-icon-2.svg"
            alt="Hajin Park's GitHub profile"
            width="40"
            height="40"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/hajinpark/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/linkedin-icon-2.svg"
            alt="Hajin Park's LinkedIn profile"
            width="40"
            height="40"
          />
        </a>
      </section>
    </Layout>
  );
}

export default Home;

