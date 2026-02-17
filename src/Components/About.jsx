// About.jsx - Updated with navbar inside hero card
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../styles/About.css';

const About = () => {
  const { isDark, toggleTheme } = useTheme();

  const stats = [
    { number: "10,000+", label: "Learners Worldwide" },
    { number: "20+", label: "Free Courses" },
    { number: "100+", label: "Hours of Content" },
    { number: "95%", label: "Satisfaction Rate" }
  ];

  const values = [
    {
      icon: "📊",
      title: "Data Consultation",
      description: "Expert guidance for your data analytics needs and strategic implementations"
    },
    {
      icon: "💡",
      title: "Industry Aware",
      description: "Stay current with the latest trends, tools, and best practices in data analytics"
    },
    {
      icon: "📚",
      title: "Accessible Education",
      description: "Quality education should be available to everyone, regardless of economic background"
    },
    {
      icon: "🎯",
      title: "Practical Focus",
      description: "Real-world skills that you can apply immediately in professional settings"
    },
    {
      icon: "🌍",
      title: "Community Driven",
      description: "Built by data professionals, for aspiring data professionals worldwide"
    },
    {
      icon: "🚀",
      title: "Career Growth",
      description: "Empowering learners to advance their careers and achieve their goals"
    }
  ];

  const team = [
    {
      name: "Data Analytics Team",
      role: "Course Creators",
      description: "Experienced professionals designing comprehensive curricula"
    },
    {
      name: "Industry Experts",
      role: "Advisors",
      description: "Guiding our content to match industry standards"
    },
    {
      name: "Community",
      role: "Contributors",
      description: "Learners and professionals helping us improve"
    }
  ];

  return (
    <div className={`about-page ${isDark ? 'dark' : 'light'}`}>

      {/* HERO SECTION — navbar is INSIDE the glassmorphic hero card */}
      <section className="about-hero">
        <div className="about-hero-card">

          {/* NAVBAR */}
          <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className="logo">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect width="28" height="28" rx="5" fill="url(#logoGradientAbout)" />
                  <path d="M14 7L19 17H9L14 7Z" fill="white" />
                  <defs>
                    <linearGradient id="logoGradientAbout" x1="0" y1="0" x2="28" y2="28">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                </svg>
              </Link>
              <div className="nav-links">
                <Link to="/courses">Courses</Link>
                <Link to="/about">About Us</Link>
                <Link to="/blog">Blog</Link>
              </div>
              <div className="nav-actions">
                <Link to="/contact">
                  <button className="btn-contact-nav">Contact Us</button>
                </Link>
                <button className="btn-theme" onClick={toggleTheme} aria-label="Toggle theme">
                  {isDark ? (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="9" cy="9" r="3.5" />
                      <line x1="9" y1="1" x2="9" y2="2.5" />
                      <line x1="9" y1="15.5" x2="9" y2="17" />
                      <line x1="3.2" y1="3.2" x2="4.3" y2="4.3" />
                      <line x1="13.7" y1="13.7" x2="14.8" y2="14.8" />
                      <line x1="1" y1="9" x2="2.5" y2="9" />
                      <line x1="15.5" y1="9" x2="17" y2="9" />
                      <line x1="3.2" y1="14.8" x2="4.3" y2="13.7" />
                      <line x1="13.7" y1="4.3" x2="14.8" y2="3.2" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                      <path d="M9 1a8 8 0 100 16A8 8 0 009 1zm0 14A6 6 0 119 3a6 6 0 010 12z" opacity="0.3"/>
                      <path d="M15.5 9A6.5 6.5 0 019 15.5V2.5A6.5 6.5 0 0115.5 9z"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </nav>

          {/* HERO CONTENT */}
          <div className="about-hero-content">
            <div className="about-hero-badge">Check out our new Tableau course!</div>
            <h1 className="about-hero-title">
              Helping everyone harness<br />
              <span className="title-muted">the power of data</span>
            </h1>
            <div className="about-hero-props">
              <div className="about-hero-prop">
                <div className="about-hero-prop-icon">🔄</div>
                <span className="about-hero-prop-label">Data Consultation</span>
              </div>
              <div className="about-hero-prop">
                <div className="about-hero-prop-icon">💡</div>
                <span className="about-hero-prop-label">Industry Aware</span>
              </div>
              <div className="about-hero-prop">
                <div className="about-hero-prop-icon">🎓</div>
                <span className="about-hero-prop-label">Accessible Education</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / OBSESSED SECTION */}
      <section className="mission-section">
        <div className="container-about">
          <h2 className="section-heading-about">We are obsessed with data<br />and its impact</h2>
          <div className="mission-content">
            <p className="mission-text">
              Our mission is to democratize data education and empower learners worldwide 
              with the skills they need to thrive in the data-driven world.
            </p>
            <p className="mission-text">
              Learn Data Skills was founded on the belief that everyone deserves access to 
              quality data education. We create free, comprehensive courses that teach 
              industry-standard tools and techniques used by professionals worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats-section">
        <div className="container-about">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="values-section">
        <div className="container-about">
          <h2 className="values-bento-heading">What We Stand For</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card-about">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="team-section">
        <div className="container-about">
          <h2 className="section-heading-about">Who We Are</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-icon">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="30" fill="#3b82f6" opacity="0.1" />
                    <circle cx="30" cy="25" r="10" fill="#3b82f6" />
                    <path d="M15 50c0-8.284 6.716-15 15-15s15 6.716 15 15" fill="#3b82f6" />
                  </svg>
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-description">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section-about">
        <div className="container-about">
          <div className="cta-card-about">
            <h2 className="cta-heading-about">Ready to Start Learning?</h2>
            <p className="cta-text-about">
              Join thousands of learners who are advancing their careers with our free courses.
            </p>
            <div className="cta-buttons-about">
              <Link to="/courses">
                <button className="btn-cta-primary-about">Browse Courses</button>
              </Link>
              <Link to="/contact">
                <button className="btn-cta-secondary-about">Get in Touch</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-banner">
          <p>
            Learn Data Skills is funded by donations or associations with the mission to provide accessible education and empower learners. 
            If you would like to contribute or require consultations for your data analytics requirements, <Link to="/contact">contact us here →</Link>
          </p>
        </div>
        <div className="footer-main">
          <div className="footer-columns">
            <div className="footer-column">
              <h4>Browse</h4>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/blog">Blog</Link>
            </div>
            <div className="footer-column">
              <h4>Courses</h4>
              <Link to="/course/1">Google Sheets</Link>
              <Link to="/course/2">SQL</Link>
              <Link to="/course/6">LLMs</Link>
              <Link to="/course/3">Tableau</Link>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms and Conditions</Link>
            </div>
          </div>
          <div className="footer-right">
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">f</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">𝕏</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">in</a>
            </div>
            <Link to="/contact">
              <button className="btn-footer-contact">Contact Us</button>
            </Link>
            <p className="footer-credit">made by <a href="https://cypher.digital" target="_blank" rel="noopener noreferrer">cypher.digital</a></p>
            <p className="footer-copyright">© 2024 Learn Data Skills.<br />All Rights Reserved.</p>
          </div>
          <div className="footer-watermark">LEARNDATASKILLS</div>
        </div>
      </footer>
    </div>
  );
};

export default About;