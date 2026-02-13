// Home.jsx - Complete Final Version with 3D Rotating Carousel and Bento Grid
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Home.css';

// Import logos
import pythonLogo from '../logos/python.png';
import lookerLogo from '../logos/looker.png';
import sqlLogo from '../logos/sql.png';
import tableauLogo from '../logos/tableau.png';
import sheetsLogo from '../logos/google_sheets.png';

const Home = () => {
  const { isDark, toggleTheme } = useTheme();
  const [currentCourse, setCurrentCourse] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const courses = [
    {
      icon: sheetsLogo,
      title: 'Getting started with Google Sheets',
      lessons: 15,
      hours: 10,
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    },
    {
      icon: tableauLogo,
      title: 'Learn Tableau for Data Visualization',
      lessons: 18,
      hours: 12,
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)'
    },
    {
      icon: sqlLogo,
      title: 'Master SQL Database Queries',
      lessons: 20,
      hours: 15,
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
    },
    {
      icon: pythonLogo,
      title: 'Python for Data Analysis',
      lessons: 25,
      hours: 20,
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
    },
    {
      icon: lookerLogo,
      title: 'Advanced Looker Analytics',
      lessons: 22,
      hours: 18,
      gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)'
    }
  ];

  const nextCourse = () => {
    if (!isRotating) {
      setIsRotating(true);
      setCurrentCourse((prev) => (prev + 1) % courses.length);
      setTimeout(() => setIsRotating(false), 600);
    }
  };

  const prevCourse = () => {
    if (!isRotating) {
      setIsRotating(true);
      setCurrentCourse((prev) => (prev - 1 + courses.length) % courses.length);
      setTimeout(() => setIsRotating(false), 600);
    }
  };

  const getCardPosition = (index) => {
    const diff = (index - currentCourse + courses.length) % courses.length;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === -4) return 'right';
    if (diff === 2 || diff === -3) return 'far-right';
    if (diff === courses.length - 1 || diff === -1) return 'left';
    if (diff === courses.length - 2 || diff === -2) return 'far-left';
    return 'hidden';
  };

  return (
    <div className={`home ${isDark ? 'dark' : 'light'}`}>
      {/* HERO SECTION WITH EMBEDDED NAVBAR */}
      <section className="hero">
        <div className="hero-card">
          <nav className="navbar">
            <div className="navbar-container">
              <div className="logo">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect width="28" height="28" rx="5" fill="url(#logoGradient)" />
                  <path d="M14 7L19 17H9L14 7Z" fill="white" />
                  <defs>
                    <linearGradient id="logoGradient" x1="0" y1="0" x2="28" y2="28">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="nav-links">
                <a href="#courses">Courses</a>
                <a href="#about">About Us</a>
                <a href="#blog">Blog</a>
              </div>

              <div className="nav-actions">
                <button className="btn-contact-nav">Contact Us</button>
                <button className="btn-theme" onClick={toggleTheme}>
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
                </button>
              </div>
            </div>
          </nav>

          <div className="hero-content">
            <div className="hero-badge">Check out our new Tableau course!</div>
            <h1 className="hero-title">Elevate your career with data</h1>
            <p className="hero-subtitle">Access our Free Analytics Courses Now!</p>
            <button className="btn-cta-primary">Start Now</button>
            <a href="#begin" className="hero-helper">Not sure where to begin? →</a>
          </div>
        </div>
      </section>

      {/* TOOL LOGOS STRIP */}
      <section className="tools-strip">
        <div className="tool-item">
          <img src={pythonLogo} alt="Python" />
        </div>
        <div className="tool-item">
          <img src={lookerLogo} alt="Looker" className="looker-logo" />
        </div>
        <div className="tool-item">
          <img src={sqlLogo} alt="SQL" />
        </div>
        <div className="tool-item">
          <img src={tableauLogo} alt="Tableau" />
        </div>
        <div className="tool-item">
          <img src={sheetsLogo} alt="Google Sheets" />
        </div>
      </section>

      {/* FEATURED COURSE SECTION WITH 3D ROTATING CAROUSEL */}
      <section className="featured-course">
        <h2 className="section-heading">
          Sharpen your<br />data analytics skills
        </h2>

        <div className="carousel-wrapper">
          <button className="carousel-nav carousel-nav-left" onClick={prevCourse}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="carousel-container">
            <div className="carousel-track">
              {courses.map((course, index) => {
                const position = getCardPosition(index);
                return (
                  <div
                    key={index}
                    className={`featured-card carousel-card carousel-${position} ${isRotating ? 'rotating' : ''}`}
                    onClick={() => {
                      if (position === 'left') prevCourse();
                      if (position === 'right') nextCourse();
                    }}
                  >
                    <div className="featured-icon" style={{ background: course.gradient }}>
                      <img src={course.icon} alt={course.title} />
                    </div>
                    <div className="featured-content">
                      <h3 className="featured-title">{course.title}</h3>
                      <div className="featured-meta">
                        <span className="meta-pill">{course.lessons} lessons</span>
                        <span className="meta-pill">{course.hours} hours</span>
                      </div>
                      <button className="btn-learn-more">Learn More</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button className="carousel-nav carousel-nav-right" onClick={nextCourse}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="carousel-dots">
          {courses.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentCourse ? 'active' : ''}`}
              onClick={() => {
                if (!isRotating) {
                  setIsRotating(true);
                  setCurrentCourse(index);
                  setTimeout(() => setIsRotating(false), 600);
                }
              }}
            />
          ))}
        </div>

        <button className="btn-view-all">View all courses</button>
      </section>

      {/* VALUE PROPOSITION GRID - BENTO BOX LAYOUT */}
      <section className="value-section">
        <h2 className="section-heading">
          Accessible education for a<br />brighter future
        </h2>

        <div className="value-grid">
          {/* Row 1, Column 1 - Small Card 1 */}
          <div className="value-card small1">
            <div className="card-visual visual-red"></div>
            <div className="card-body">
              <h3 className="card-heading">Industry Standard</h3>
              <p className="card-text">The skills we teach are immediately applicable for data processing</p>
            </div>
          </div>

          {/* Row 1, Column 2 - Small Card 2 */}
          <div className="value-card small2">
            <div className="card-visual visual-pink"></div>
            <div className="card-body">
              <h3 className="card-heading">Core Fundamentals</h3>
              <p className="card-text">Our courses focus on the central concepts around data analytics</p>
            </div>
          </div>

          {/* Row 1, Column 3 - Small Card 3 */}
          <div className="value-card small3">
            <div className="card-visual visual-blue"></div>
            <div className="card-body">
              <h3 className="card-heading">Relevant Techniques</h3>
              <p className="card-text">We stay in tandem with an ever evolving industry</p>
            </div>
          </div>

          {/* Row 1-2, Column 4 - Large Card (spans 2 rows) */}
          <div className="value-card large">
            <div className="card-visual visual-purple"></div>
            <div className="card-body">
              <h3 className="card-heading">Accessible Education</h3>
              <p className="card-text">Our mission is to make education accessible to everyone who seeks to pursue a skill without quality or economic challenges</p>
            </div>
          </div>

          {/* Row 2, Columns 1-3 - Wide Card (spans 3 columns) */}
          <div className="value-card wide">
            <div className="card-visual visual-wave"></div>
            <div className="card-body">
              <h3 className="card-heading">For all learning levels</h3>
              <p className="card-text">The resources we offer benefit beginners starting their journey and veterans looking to refresh their skills alike</p>
            </div>
          </div>
        </div>

        <div className="support-cta">
          <button className="btn-supporter">Become a supporter</button>
          <a href="#about" className="support-link">Learn more about us →</a>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="blog-section">
        <div className="blog-container">
          <h2 className="section-heading">
            Read the latest industry<br />news and trends
          </h2>

          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-image-wrapper">
                <span className="blog-badge">Blog</span>
                <div className="blog-image blog-img-1"></div>
              </div>
              <div className="blog-body">
                <h3 className="blog-title">Sora: OpenAI's Revolutionary Tool</h3>
                <a href="#read" className="blog-link">Read now →</a>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-image-wrapper">
                <span className="blog-badge">Blog</span>
                <div className="blog-image blog-img-2"></div>
              </div>
              <div className="blog-body">
                <h3 className="blog-title">CTEs And Subqueries</h3>
                <a href="#read" className="blog-link">Read now →</a>
              </div>
            </div>
          </div>

          <a href="#blogs" className="view-all-link">Read all our blogs →</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-banner">
          <p>
            Learn Data Skills is funded by donations or associations with the mission to provide accessible education and empower learners. 
            If you would like to contribute or require consultations for your data analytics requirements, <a href="#contact">contact us here →</a>
          </p>
        </div>

        <div className="footer-main">
          <div className="footer-columns">
            <div className="footer-column">
              <h4>Browse</h4>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#courses">Courses</a>
              <a href="#blog">Blog</a>
            </div>

            <div className="footer-column">
              <h4>Courses</h4>
              <a href="#sheets">Google Sheets</a>
              <a href="#sql">SQL</a>
              <a href="#llms">LLMs</a>
              <a href="#tableau">Tableau</a>
            </div>

            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms and Conditions</a>
            </div>
          </div>

          <div className="footer-right">
            <div className="social-icons">
              <a href="#facebook" className="social-icon">f</a>
              <a href="#twitter" className="social-icon">𝕏</a>
              <a href="#linkedin" className="social-icon">in</a>
            </div>
            <button className="btn-footer-contact">Contact Us</button>
            <p className="footer-credit">made by <a href="#cypher">cypher.digital</a></p>
            <p className="footer-copyright">© 2024 Learn Data Skills.<br />All Rights Reserved.</p>
          </div>

          <div className="footer-watermark">LEARNDATASKILLS</div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
