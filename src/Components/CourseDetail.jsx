// CourseDetail.jsx - Fixed version
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../styles/CourseDetail.css';

// Import logos
import sheetsLogo from '../logos/google_sheets.png';

const CourseDetail = () => {
  const { id } = useParams();
  const { isDark, toggleTheme } = useTheme();
  const [expandedModule, setExpandedModule] = useState(null);

  // Course data - in production, fetch based on id from API
  const courseData = {
    icon: sheetsLogo,
    title: 'Getting started with Google Sheets',
    badge: 'Course',
    lessons: 15,
    hours: 10,
    projects: 3,
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    overview: {
      whoFor: 'Anyone interested in mastering Google Sheets to enhance their data processing skills.',
      whatYouLearn: 'The core fundamentals of spreadsheets and some functions to process data and calculate insights.'
    },
    prerequisites: {
      title: 'None',
      description: 'This is an example of a full item',
      additional: 'This is an example of a full item'
    },
    modules: [
      {
        id: 1,
        title: 'Introduction to Google Sheets',
        badge: 'Module 1',
        image: 'module-1',
        lessons: 3,
        description: 'Learn the basics of Google Sheets interface and functionality'
      },
      {
        id: 2,
        title: 'Spreadsheet Basics, Variables, and Shortcuts',
        badge: 'Module 2',
        image: 'module-2',
        lessons: 4,
        description: 'Master essential spreadsheet operations and time-saving shortcuts'
      },
      {
        id: 3,
        title: 'Introduction to Functions',
        badge: 'Module 3',
        image: 'module-3',
        lessons: 3,
        description: 'Discover powerful functions to automate calculations'
      },
      {
        id: 4,
        title: 'Conditional Functions',
        badge: 'Module 4',
        image: 'module-4',
        lessons: 2,
        description: 'Use IF statements and logical functions'
      },
      {
        id: 5,
        title: 'Sorting, Filtering & Pivot Tables',
        badge: 'Module 5',
        image: 'module-5',
        lessons: 3,
        description: 'Organize and analyze data effectively'
      },
      {
        id: 6,
        title: 'Lookups',
        badge: 'Module 6',
        image: 'module-6',
        lessons: 2,
        description: 'Find and retrieve data with VLOOKUP and XLOOKUP'
      },
      {
        id: 7,
        title: 'Google Functions',
        badge: 'Module 7',
        image: 'module-7',
        lessons: 2,
        description: 'Leverage Google-specific functions and integrations'
      },
      {
        id: 8,
        title: 'Import Range Data',
        badge: 'Module 8',
        image: 'module-8',
        lessons: 1,
        description: 'Connect and import data from external sources'
      }
    ],
    referenceMaterials: [
      {
        title: 'Guide to Google Sheets',
        author: 'NS Analytics | LDS',
        badge: 'External',
        link: 'https://example.com/guide'
      },
      {
        title: 'Navigating Google Sheets',
        author: 'Google',
        badge: 'External',
        link: 'https://support.google.com/sheets'
      },
      {
        title: 'Data Variables',
        author: 'Stack Overflow',
        badge: 'External',
        link: 'https://stackoverflow.com'
      }
    ]
  };

  // Log the course ID for debugging (in production, use this to fetch data)
  console.log('Loading course:', id);

  return (
    <div className={`course-detail-page ${isDark ? 'dark' : 'light'}`}>
      {/* NAVBAR */}
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

      {/* HERO SECTION */}
      <section className="course-detail-hero">
        <div className="container">
          <div className="hero-content-detail">
            <div className="hero-badge-detail">{courseData.badge}</div>
            <h1 className="hero-title-detail">{courseData.title}</h1>
            
            <div className="course-meta-hero">
              <span className="meta-pill-hero">{courseData.lessons} Lessons</span>
              <span className="meta-pill-hero">{courseData.hours} hours</span>
              <span className="meta-pill-hero">{courseData.projects} Projects</span>
            </div>

            <Link to="/courses" className="back-link">← Back to Courses</Link>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="overview-section">
        <div className="container-detail">
          <div className="overview-grid">
            <div className="overview-item">
              <h3 className="overview-label">Who is this for?</h3>
              <p className="overview-text">{courseData.overview.whoFor}</p>
            </div>

            <div className="overview-item">
              <h3 className="overview-label">What you will learn</h3>
              <p className="overview-text">{courseData.overview.whatYouLearn}</p>
            </div>

            <div className="overview-item">
              <h3 className="overview-label">Prerequisites</h3>
              <p className="overview-text-bold">{courseData.prerequisites.title}</p>
              <p className="overview-text">{courseData.prerequisites.description}</p>
              <p className="overview-text">{courseData.prerequisites.additional}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MODULES SECTION */}
      <section className="modules-section">
        <div className="container-detail">
          <div className="modules-grid">
            {courseData.modules.map(module => (
              <div 
                key={module.id} 
                className={`module-card ${expandedModule === module.id ? 'expanded' : ''}`}
                onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
              >
                <span className="module-badge">{module.badge}</span>
                <div className={`module-image module-${module.image}`}></div>
                <div className="module-info">
                  <h3 className="module-title">{module.title}</h3>
                  <button className="module-view-btn">View lessons →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFERENCE MATERIALS */}
      <section className="reference-section">
        <div className="container-detail">
          <h2 className="section-heading-detail">Reference Material</h2>
          
          <div className="reference-list">
            {courseData.referenceMaterials.map((material, index) => (
              <a href={material.link} key={index} className="reference-item" target="_blank" rel="noopener noreferrer">
                <div className="reference-content">
                  <span className="reference-badge">{material.badge}</span>
                  <h4 className="reference-title">{material.title}</h4>
                  <p className="reference-author">{material.author}</p>
                </div>
                <svg className="reference-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 3L13 10L7 17" />
                </svg>
              </a>
            ))}
          </div>

          <div className="navigation-buttons">
            <button className="nav-btn prev-btn">← Previous module</button>
            <button className="nav-btn next-btn">Next module →</button>
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

export default CourseDetail;