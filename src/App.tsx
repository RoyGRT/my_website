import './App.css';

const workExperiences = [
  {
    role: 'Role Title',
    company: 'Company Name',
    timeframe: '2022 – Present',
    summary:
      'Add a short highlight about impact, the team, and the technologies you used.',
  },
  {
    role: 'Role Title',
    company: 'Company Name',
    timeframe: '2020 – 2022',
    summary:
      'Add a second highlight about a project, measurable results, and your responsibilities.',
  },
  {
    role: 'Role Title',
    company: 'Company Name',
    timeframe: '2018 – 2020',
    summary:
      'Add a third highlight to showcase leadership, collaboration, or growth.',
  },
];

export default function App() {
  return (
    <div className="page">
      <div className="background-effects" aria-hidden="true">
        <span className="orb orb-one" />
        <span className="orb orb-two" />
        <span className="orb orb-three" />
      </div>

      <header className="hero">
        <nav className="nav">
          <div className="logo">Ruotian Gao</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="hero-content" id="about">
          <div className="hero-text">
            <p className="eyebrow">Personal website · available for hire</p>
            <h1>
              Hi, I’m Ruotian — a <span>creative technologist</span> who loves
              building thoughtful digital experiences.
            </h1>
            <p className="subhead">
              Replace this paragraph with a short intro that captures your
              mission, values, and current focus. Mention what types of roles or
              collaborations excite you.
            </p>
            <div className="hero-actions">
              <button className="primary">Download Resume</button>
              <a className="secondary" href="#contact">
                Let’s talk
              </a>
            </div>
          </div>

          <div className="hero-photo">
            <div className="photo-card">
              <div className="photo-placeholder">
                <span>Add your photo</span>
              </div>
              <div className="photo-caption">
                <h3>Photo Section</h3>
                <p>
                  Drop in a portrait and update this caption with something fun
                  about you.
                </p>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className="section work" id="work">
          <div className="section-header">
            <p className="eyebrow">Work Experience</p>
            <h2>Where I’ve made an impact</h2>
            <p>
              Share the highlights of your professional journey. Add or remove
              cards as needed to match your story.
            </p>
          </div>

          <div className="work-grid">
            {workExperiences.map((experience) => (
              <article className="work-card" key={experience.timeframe}>
                <div className="work-card-header">
                  <h3>{experience.role}</h3>
                  <span>{experience.timeframe}</span>
                </div>
                <p className="company">{experience.company}</p>
                <p>{experience.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let’s connect</h2>
              <p>
                Add your email address and a short note inviting people to reach
                out. The form opens an email draft in the visitor’s mail client.
              </p>
            </div>
            <form
              className="contact-form"
              action="mailto:hello@ruotiangao.com"
              method="post"
              encType="text/plain"
            >
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="Your email" />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  placeholder="Tell me about your project"
                  rows={4}
                />
              </label>
              <button type="submit" className="primary">
                Send email
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 Ruotian Gao. Built with React and hosted on GitHub Pages.</p>
        <p className="domain">ruotiangao.com</p>
      </footer>
    </div>
  );
}
