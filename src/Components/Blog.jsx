// Blog.jsx - Updated with navbar inside hero card
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../styles/Blog.css';

const Blog = () => {
  const { isDark, toggleTheme } = useTheme();

  const blogPosts = [
    { id: 1, title: "Sora: OpenAI's Revolutionary Tool", excerpt: "This new tool from OpenAI transforms text into lifelike videos using the simplest of prompts and references", image: 'blog-1', date: '1 Jan 2024', author: 'Author', readTime: '5 mins', badge: 'Blog' },
    { id: 2, title: "CTEs And Subqueries", excerpt: "Deep dive into Common Table Expressions and subqueries in SQL for advanced data manipulation", image: 'blog-2', date: '28 Dec 2023', author: 'Author', readTime: '7 mins', badge: 'Blog' },
    { id: 3, title: "Sora: OpenAI's Revolutionary Tool", excerpt: "Exploring the capabilities and implications of AI-generated video content", image: 'blog-3', date: '20 Dec 2023', author: 'Author', readTime: '6 mins', badge: 'Blog' },
    { id: 4, title: "CTEs And Subqueries", excerpt: "Master complex SQL queries with practical examples and best practices", image: 'blog-4', date: '15 Dec 2023', author: 'Author', readTime: '8 mins', badge: 'Blog' },
    { id: 5, title: "Sora: OpenAI's Revolutionary Tool", excerpt: "The future of video content creation powered by artificial intelligence", image: 'blog-5', date: '10 Dec 2023', author: 'Author', readTime: '5 mins', badge: 'Blog' },
    { id: 6, title: "CTEs And Subqueries", excerpt: "Advanced techniques for writing efficient and maintainable SQL code", image: 'blog-6', date: '5 Dec 2023', author: 'Author', readTime: '9 mins', badge: 'Blog' }
  ];

  const resources = [
    { id: 1, title: 'Getting started with Data Analytics', image: 'resource-1', badge: 'Resource' },
    { id: 2, title: 'Preparing for a Data Analyst Interview', image: 'resource-2', badge: 'Resource' }
  ];

  const featuredPost = blogPosts[0];

  return (
    <div className={`blog-page ${isDark ? 'dark' : 'light'}`}>

      {/* HERO — navbar INSIDE the glassmorphic hero card */}
      <section className="blog-hero">
        <div className="blog-hero-card">
          <div className="blog-hero-bg"></div>

          {/* NAVBAR */}
          <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className="logo">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect width="28" height="28" rx="5" fill="url(#lgBlog)" />
                  <path d="M14 7L19 17H9L14 7Z" fill="white" />
                  <defs>
                    <linearGradient id="lgBlog" x1="0" y1="0" x2="28" y2="28">
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
                <Link to="/contact"><button className="btn-contact-nav">Contact Us</button></Link>
                <button className="btn-theme" onClick={toggleTheme} aria-label="Toggle theme">
                  {isDark ? (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="9" cy="9" r="3.5" /><line x1="9" y1="1" x2="9" y2="2.5" /><line x1="9" y1="15.5" x2="9" y2="17" />
                      <line x1="3.2" y1="3.2" x2="4.3" y2="4.3" /><line x1="13.7" y1="13.7" x2="14.8" y2="14.8" />
                      <line x1="1" y1="9" x2="2.5" y2="9" /><line x1="15.5" y1="9" x2="17" y2="9" />
                      <line x1="3.2" y1="14.8" x2="4.3" y2="13.7" /><line x1="13.7" y1="4.3" x2="14.8" y2="3.2" />
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

          {/* FEATURED POST HERO CONTENT */}
          <Link to={`/blog/${featuredPost.id}`} className="blog-hero-content">
            <span className="featured-badge">{featuredPost.badge}</span>
            <h1 className="featured-title">{featuredPost.title}</h1>
            <p className="featured-excerpt">{featuredPost.excerpt}</p>
            <div className="featured-meta">
              <span>{featuredPost.date}</span>
              <span>{featuredPost.author}</span>
              <span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '4px', verticalAlign: 'middle' }}>
                  <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                {featuredPost.readTime}
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="blog-grid-section">
        <div className="container-blog">
          <div className="blog-posts-grid">
            {blogPosts.slice(1).map(post => (
              <Link to={`/blog/${post.id}`} key={post.id} className="blog-post-card">
                <div className="blog-post-image-wrapper">
                  <span className="blog-post-badge">{post.badge}</span>
                  <div className={`blog-post-image ${post.image}`}></div>
                </div>
                <div className="blog-post-content">
                  <h3 className="blog-post-title">{post.title}</h3>
                  <span className="blog-post-link">Read now →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="blog-pagination">
            <Link to="/blog"><button className="pagination-btn">Read all our blogs →</button></Link>
          </div>
        </div>
      </section>

      {/* RESOURCES SECTION */}
      <section className="resources-blog-section">
        <div className="container-blog">
          <h2 className="section-heading-blog">Resources</h2>
          <div className="resources-blog-grid">
            {resources.map((resource) => (
              <Link to={`/resource/${resource.id}`} key={resource.id} className="resource-blog-card">
                <span className="resource-blog-badge">{resource.badge}</span>
                <div className={`resource-blog-image ${resource.image}`}></div>
                <div className="resource-blog-content">
                  <h3 className="resource-blog-title">{resource.title}</h3>
                  <span className="resource-blog-link">Read now →</span>
                </div>
              </Link>
            ))}
          </div>
          <Link to="/resources" className="view-all-blog-link">View all →</Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-banner">
          <p>Learn Data Skills is funded by donations or associations with the mission to provide accessible education and empower learners. If you would like to contribute or require consultations for your data analytics requirements, <Link to="/contact">contact us here →</Link></p>
        </div>
        <div className="footer-main">
          <div className="footer-columns">
            <div className="footer-column">
              <h4>Browse</h4>
              <Link to="/">Home</Link><Link to="/about">About</Link><Link to="/courses">Courses</Link><Link to="/blog">Blog</Link>
            </div>
            <div className="footer-column">
              <h4>Courses</h4>
              <Link to="/course/1">Google Sheets</Link><Link to="/course/2">SQL</Link><Link to="/course/6">LLMs</Link><Link to="/course/3">Tableau</Link>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms and Conditions</Link>
            </div>
          </div>
          <div className="footer-right">
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">f</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">𝕏</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">in</a>
            </div>
            <Link to="/contact"><button className="btn-footer-contact">Contact Us</button></Link>
            <p className="footer-credit">made by <a href="https://cypher.digital" target="_blank" rel="noopener noreferrer">cypher.digital</a></p>
            <p className="footer-copyright">© 2024 Learn Data Skills.<br />All Rights Reserved.</p>
          </div>
          <div className="footer-watermark">LEARNDATASKILLS</div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;