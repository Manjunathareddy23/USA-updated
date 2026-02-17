// Home.jsx - Updated with clock icons and improved image alignment
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../styles/Home.css';

// Import logos from logos folder (for navbar/footer)
import pythonLogoo from '../logos/python.png';
import lookerLogoo from '../logos/looker.png';
import sqlLogoo from '../logos/sql.png';
import tableauLogoo from '../logos/tableau.png';
import sheetsLogoo from '../logos/google_sheets.png';

// Import course icons from images folder
import pythonLog from '../images/python1.png';
import lookerLog from '../images/looker.png';
import sqlLog from '../images/sql1.png';
import tableauLog from '../images/tableau1.png';
import sheetsLog from '../images/sheets.png';

// Import value section images
import accessImage from '../images/access.jpg';
import levelupImage from '../images/levelup.jpg';
import relevantImage from '../images/relavant.png';
import fundamentalsImage from '../images/fundamentals.jpg';
import standardsImage from '../images/stadandards.jpg';

// Import blog images
import soraImage from '../images/sora.png';
import cteImage from '../images/cte.png';

const Home = () => {
  const { isDark, toggleTheme } = useTheme();
  const [currentCourse, setCurrentCourse] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const courses = [
    {
      id: 1,
      icon: sheetsLog,
      title: 'Getting started with Google Sheets',
      lessons: 15,
      hours: 10,
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    },
    {
      id: 2,
      icon: tableauLog,
      title: 'Learn Tableau for Data Visualization',
      lessons: 18,
      hours: 12,
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)'
    },
    {
      id: 3,
      icon: sqlLog,
      title: 'Master SQL Database Queries',
      lessons: 20,
      hours: 15,
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
    },
    {
      id: 4,
      icon: pythonLog,
      title: 'Python for Data Analysis',
      lessons: 25,
      hours: 20,
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
    },
    {
      id: 5,
      icon: lookerLog,
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
              
              <Link to="/" className="logo">
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
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 3C10.3431 3 8.8043 3.8043 7.75736 4.75736C6.71043 5.71043 6 6.9875 6 8.5C6 10.0125 6.71043 11.2896 7.75736 12.2426C8.8043 13.1957 10.3431 14 12 14C13.6569 14 15.1957 13.1957 16.2426 12.2426C17.2896 11.2896 18 10.0125 18 8.5C18 6.9875 17.2896 5.71043 16.2426 4.75736C15.1957 3.8043 13.6569 3 12 3Z" />
                    </svg>
                  )}
                   
                  
                </button>
              </div>
            </div>
          </nav>

          <div className="hero-content">
            <div className="hero-badge">Check out our new Tableau course!</div>
            <h1 className="hero-title">Elevate your career with data</h1>
            <p className="hero-subtitle">Access our Free Analytics Courses Now!</p>
            <Link to="/courses">
              <button className="btn-cta-primary">Start Now</button>
            </Link>
            <Link to="/courses" className="hero-helper">Not sure where to begin? →</Link>
          </div>
        </div>
      </section>

      {/* TOOL LOGOS STRIP */}
      <section className="tools-strip">
        <div className="tool-item">
          <img src={pythonLogoo} alt="Python" />
        </div>
        <div className="tool-item">
          <img src={lookerLogoo} alt="Looker" className="looker-logo" />
        </div>
        <div className="tool-item">
          <img src={sqlLogoo} alt="SQL" />
        </div>
        <div className="tool-item">
          <img src={tableauLogoo} alt="Tableau" />
        </div>
        <div className="tool-item">
          <img src={sheetsLogoo} alt="Google Sheets" />
        </div>
      </section>

      {/* FEATURED COURSE SECTION WITH 3D ROTATING CAROUSEL */}
      <section className="featured-course">
        <h2 className="section-heading">
          Sharpen your<br />data analytics skills
        </h2>

        <div className="carousel-wrapper">
          <button className="carousel-nav carousel-nav-left" onClick={prevCourse} aria-label="Previous course">
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
                        <span className="meta-pill">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '4px', verticalAlign: 'middle' }}>
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                          </svg>
                          {course.lessons} lessons
                        </span>
                        <span className="meta-pill">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '4px', verticalAlign: 'middle' }}>
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          {course.hours} hours
                        </span>
                      </div>
                      <Link to={`/course/${course.id}`}>
                        <button className="btn-learn-more">Learn More</button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button className="carousel-nav carousel-nav-right" onClick={nextCourse} aria-label="Next course">
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
              role="button"
              tabIndex={0}
              aria-label={`Go to course ${index + 1}`}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !isRotating) {
                  setIsRotating(true);
                  setCurrentCourse(index);
                  setTimeout(() => setIsRotating(false), 600);
                }
              }}
            />
          ))}
        </div>

        <Link to="/courses">
          <button className="btn-view-all">View all courses</button>
        </Link>
      </section>

      {/* VALUE PROPOSITION GRID - BENTO BOX LAYOUT */}
      <section className="value-section">
        <h2 className="section-heading">
          Accessible education for a<br />brighter future
        </h2>

        <div className="value-grid">
          {/* Row 1, Column 1 - Small Card 1 - Industry Standard */}
          <div className="value-card small1">
            <div className="card-visual" style={{ backgroundImage: `url(${standardsImage})` }}></div>
            <div className="card-body">
              <h3 className="card-heading">Industry Standard</h3>
              <p className="card-text">The skills we teach are immediately applicable for data processing</p>
            </div>
          </div>

          {/* Row 1, Column 2 - Small Card 2 - Core Fundamentals */}
          <div className="value-card small2">
            <div className="card-visual" style={{ backgroundImage: `url(${fundamentalsImage})` }}></div>
            <div className="card-body">
              <h3 className="card-heading">Core Fundamentals</h3>
              <p className="card-text">Our courses focus on the central concepts around data analytics</p>
            </div>
          </div>

          {/* Row 1, Column 3 - Small Card 3 - Relevant Techniques */}
          <div className="value-card small3">
            <div className="card-visual" style={{ backgroundImage: `url(${relevantImage})` }}></div>
            <div className="card-body">
              <h3 className="card-heading">Relevant Techniques</h3>
              <p className="card-text">We stay in tandem with an ever evolving industry</p>
            </div>
          </div>

          {/* Row 1-2, Column 4 - Large Card (spans 2 rows) - Accessible Education */}
          <div className="value-card large">
            <div className="card-visual" style={{ backgroundImage: `url(${accessImage})` }}></div>
            <div className="card-body">
              <h3 className="card-heading">Accessible Education</h3>
              <p className="card-text">Our mission is to make education accessible to everyone who seeks to pursue a skill without quality or economic challenges</p>
            </div>
          </div>

          {/* Row 2, Columns 1-3 - Wide Card (spans 3 columns) - For all learning levels */}
          <div className="value-card wide">
            <div className="card-visual" style={{ backgroundImage: `url(${levelupImage})` }}></div>
            <div className="card-body">
              <h3 className="card-heading">For all learning levels</h3>
              <p className="card-text">The resources we offer benefit beginners starting their journey and veterans looking to refresh their skills alike</p>
            </div>
          </div>
        </div>

        <div className="support-cta">
          <Link to="/about">
            <button className="btn-supporter">Become a supporter</button>
          </Link>
          <Link to="/about" className="support-link">Learn more about us →</Link>
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
                <img src={soraImage} alt="Sora OpenAI" className="blog-image" />
              </div>
              <div className="blog-body">
                <h3 className="blog-title">Sora: OpenAI's Revolutionary Tool</h3>
                <Link to="/blog/1" className="blog-link">Read now →</Link>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-image-wrapper">
                <span className="blog-badge">Blog</span>
                <img src={cteImage} alt="CTEs and Subqueries" className="blog-image" />
              </div>
              <div className="blog-body">
                <h3 className="blog-title">CTEs And Subqueries</h3>
                <Link to="/blog/2" className="blog-link">Read now →</Link>
              </div>
            </div>
          </div>

          <Link to="/blog" className="view-all-link">Read all our blogs →</Link>
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
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">f</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">𝕏</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">in</a>
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

export default Home;