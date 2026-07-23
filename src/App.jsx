import './App.css'

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Go',
]

const projects = [
  { title: 'Project A', desc: 'A web application built with React and Node.js', url: '#' },
  { title: 'Project B', desc: 'CLI tool for automating workflows', url: '#' },
  { title: 'Project C', desc: 'Open source library for data visualization', url: '#' },
]

const socialLinks = [
  { label: 'GitHub', url: 'https://github.com/Solice' },
  { label: 'Email', url: 'mailto:hello@example.com' },
  { label: 'Blog', url: '#' },
]

function App() {
  return (
    <div className="layout">
      <header className="header">
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero">
          <div className="hero-content">
            <h1>Solice</h1>
            <p className="hero-subtitle">Developer &amp; Creator</p>
            <p className="hero-desc">
              Building things that matter. Passionate about web development,
              open source, and elegant solutions.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-secondary">Get in Touch</a>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <h2>About</h2>
          <div className="about-content">
            <p>
              I'm a developer focused on creating clean, efficient, and
              user-friendly applications. With experience across the full
              stack, I enjoy turning complex problems into simple,
              beautiful solutions.
            </p>
            <div className="skills">
              <h3>Skills &amp; Tools</h3>
              <div className="skill-tags">
                {skills.map((s) => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="project-grid">
            {projects.map((p) => (
              <a key={p.title} href={p.url} className="project-card">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2>Contact</h2>
          <p>Feel free to reach out or follow my work.</p>
          <div className="social-links">
            {socialLinks.map((l) => (
              <a key={l.label} href={l.url} className="social-link">
                {l.label}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Solice. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
