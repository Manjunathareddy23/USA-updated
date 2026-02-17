// Courses.jsx - FINAL with correct image paths
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../styles/Courses.css';

// Import logos from LOGOS folder
import pythonLogo from '../logos/python.png';
import lookerLogo from '../logos/looker.png';
import sqlLogo from '../logos/sql.png';
import tableauLogo from '../logos/tableau.png';
import sheetsLogo from '../logos/google_sheets.png';

const Courses = () => {
  const { isDark, toggleTheme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courses = [
    {
      id: 1,
      icon: sheetsLogo,
      title: 'Getting started with Google Sheets',
      description: 'Learn the basics of spreadsheets and data organization in Google Sheets to enhance your data processing skills.',
      lessons: 15,
      hours: 10,
      category: 'spreadsheets',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      badge: 'Free'
    },
    {
      id: 2,
      icon: sqlLogo,
      title: 'Introduction to SQL',
      description: 'Master SQL fundamentals to efficiently manage, query, and analyze data stored in relational databases.',
      lessons: 20,
      hours: 15,
      category: 'databases',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      badge: 'Free'
    },
    {
      id: 3,
      icon: tableauLogo,
      title: 'Visualizing your data with Tableau',
      description: 'Create powerful data visualizations and interactive dashboards with Tableau to communicate insights effectively.',
      lessons: 18,
      hours: 12,
      category: 'visualization',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
      badge: 'Free'
    },
    {
      id: 4,
      icon: pythonLogo,
      title: 'Python for Data Analysis',
      description: 'Explore data analysis using Python libraries like pandas and NumPy to process and analyze large datasets.',
      lessons: 25,
      hours: 20,
      category: 'programming',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      badge: 'Free'
    },
    {
      id: 5,
      icon: lookerLogo,
      title: 'Advanced Looker Analytics',
      description: 'Dive deep into Looker to create custom reports, explore data models, and build business intelligence solutions.',
      lessons: 22,
      hours: 18,
      category: 'analytics',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
      badge: 'Free'
    },
    {
      id: 6,
      icon: sheetsLogo,
      title: 'Create and Manage LLMs',
      description: 'Understand large language models and learn how to create, fine-tune, and manage AI-powered applications.',
      lessons: 30,
      hours: 25,
      category: 'ai',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
      badge: 'Free'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'spreadsheets', name: 'Spreadsheets' },
    { id: 'databases', name: 'Databases' },
    { id: 'visualization', name: 'Visualization' },
    { id: 'programming', name: 'Programming' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'ai', name: 'AI & ML' }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className={`courses-page ${isDark ? 'dark' : 'light'}`}>
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
                  <path d="M17.293.293a1 1 0 011.414 1.414l-16 16a1 1 0 01-1.414-1.414l16-16zM9 2a7 7 0 105.293 11.707l-10-10A6.965 6.965 0 009 2z"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="courses-hero">
        <div className="courses-hero-content">
          <div className="hero-badge">Check out our new Tableau course!</div>
          <h1 className="hero-title">Empowering you with<br />industry grade education</h1>
          
          <div className="value-props">
            <div className="value-prop">
              <div className="prop-icon pink">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <span>Learn at your own pace</span>
            </div>
            <div className="value-prop">
              <div className="prop-icon green">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                </svg>
              </div>
              <span>Track your progress</span>
            </div>
            <div className="value-prop">
              <div className="prop-icon blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                </svg>
              </div>
              <span>Proven ready skills</span>
            </div>
          </div>

          <Link to="/about" className="not-sure-link">Not sure where to begin? →</Link>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Start your learning journey</h2>
          
          <div className="category-filters">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="courses-grid">
            {filteredCourses.map(course => (
              <Link to={`/course/${course.id}`} key={course.id} className="course-card">
                <div className="course-badge">{course.badge}</div>
                <div className="course-icon-wrapper" style={{ background: course.gradient }}>
                  <img src={course.icon} alt={course.title} />
                </div>
                <div className="course-info">
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-description">{course.description}</p>
                  <div className="course-meta">
                    <span className="meta-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '4px', verticalAlign: 'middle' }}>
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      {course.lessons} lessons
                    </span>
                    <span className="meta-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '4px', verticalAlign: 'middle' }}>
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      {course.hours} hours
                    </span>
                  </div>
                  <button className="course-start-btn">Start Now</button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="value-section-courses">
        <div className="container">
          <h2 className="section-heading">
            Accessible education for a<br />brighter future
          </h2>

          <div className="value-grid-courses">
            <div className="value-card-courses small">
              <div className="card-visual-courses visual-red"></div>
              <div className="card-body-courses">
                <h3 className="card-heading-courses">Industry Standard</h3>
                <p className="card-text-courses">The skills we teach are immediately applicable for data processing</p>
              </div>
            </div>

            <div className="value-card-courses small">
              <div className="card-visual-courses visual-pink"></div>
              <div className="card-body-courses">
                <h3 className="card-heading-courses">Core Fundamentals</h3>
                <p className="card-text-courses">Our courses focus on the central concepts around data analytics</p>
              </div>
            </div>

            <div className="value-card-courses small">
              <div className="card-visual-courses visual-blue"></div>
              <div className="card-body-courses">
                <h3 className="card-heading-courses">Relevant Techniques</h3>
                <p className="card-text-courses">We stay in tandem with an ever evolving industry</p>
              </div>
            </div>

            <div className="value-card-courses large">
              <div className="card-visual-courses visual-purple"></div>
              <div className="card-body-courses">
                <h3 className="card-heading-courses">Accessible Education</h3>
                <p className="card-text-courses">Our mission is to make education accessible to everyone who seeks to pursue a skill without quality or economic challenges</p>
              </div>
            </div>

            <div className="value-card-courses wide">
              <div className="card-visual-courses visual-wave"></div>
              <div className="card-body-courses">
                <h3 className="card-heading-courses">For all learning levels</h3>
                <p className="card-text-courses">The resources we offer benefit beginners starting their journey and veterans looking to refresh their skills alike</p>
              </div>
            </div>
          </div>

          <div className="support-cta-courses">
            <Link to="/about">
              <button className="btn-supporter">Become a supporter</button>
            </Link>
            <Link to="/about" className="support-link">Learn more about us →</Link>
          </div>
        </div>
      </section>

      {/* RESOURCES SECTION */}
      <section className="resources-section-courses">
        <div className="container">
          <h2 className="section-heading">Resources</h2>
          
          <div className="resources-grid">
            <Link to="/resource/1" className="resource-card">
              <span className="resource-badge">Resource</span>
              <div className="resource-image resource-img-1"></div>
              <div className="resource-body">
                <h3 className="resource-title">Getting started with Data Analytics</h3>
                <span className="resource-link">Read now →</span>
              </div>
            </Link>

            <Link to="/resource/2" className="resource-card">
              <span className="resource-badge">Resource</span>
              <div className="resource-image resource-img-2"></div>
              <div className="resource-body">
                <h3 className="resource-title">Preparing for a Data Analyst Interview</h3>
                <span className="resource-link">Read now →</span>
              </div>
            </Link>
          </div>

          <Link to="/resources" className="view-all-link-courses">View all →</Link>
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

export default Courses;