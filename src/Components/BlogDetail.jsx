// BlogDetail.jsx - Individual blog post page
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../styles/BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams();
  const { isDark, toggleTheme } = useTheme();

  // In production, fetch blog data based on id from API
  const blogPost = {
    id: parseInt(id),
    title: "Sora: OpenAI's Revolutionary Tool",
    date: '1 Jan 2024',
    author: 'Learn Data Skills Team',
    readTime: '5 mins',
    category: 'AI & Machine Learning',
    excerpt: 'This new tool from OpenAI transforms text into lifelike videos using the simplest of prompts and references',
    content: `
      <p>OpenAI has unveiled Sora, a groundbreaking text-to-video AI model that represents a major leap forward in generative artificial intelligence. This revolutionary tool can create realistic and imaginative video scenes from simple text descriptions.</p>
      
      <h2>What Makes Sora Special?</h2>
      <p>Sora stands out for its ability to generate videos up to a minute long while maintaining visual quality and adherence to the user's prompt. The model understands not just what the user has asked for in the prompt, but also how those things exist in the physical world.</p>
      
      <h2>Technical Capabilities</h2>
      <p>The model can generate complex scenes with multiple characters, specific types of motion, and accurate details of the subject and background. It understands both language and the physical world, enabling it to create compelling characters that express vibrant emotions.</p>
      
      <h2>Potential Applications</h2>
      <p>From content creation to education, Sora has the potential to revolutionize various industries. Content creators can use it for rapid prototyping, while educators can leverage it to create engaging visual materials.</p>
      
      <h2>Current Limitations</h2>
      <p>While impressive, Sora isn't perfect. It may struggle with accurately simulating the physics of a complex scene, and might not understand specific instances of cause and effect. OpenAI is working on addressing these limitations.</p>
      
      <h2>The Future of AI Video Generation</h2>
      <p>As Sora continues to develop, we can expect even more sophisticated capabilities. The integration of such technology into creative workflows could fundamentally change how we approach content creation and visual storytelling.</p>
    `
  };

  return (
    <div className={`blog-detail-page ${isDark ? 'dark' : 'light'}`}>
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

      {/* BLOG POST CONTENT */}
      <article className="blog-article">
        <div className="container-blog-detail">
          <Link to="/blog" className="back-link-blog">← Back to Blog</Link>
          
          <header className="blog-header">
            <span className="blog-category-badge">{blogPost.category}</span>
            <h1 className="blog-post-title">{blogPost.title}</h1>
            <div className="blog-meta">
              <span>{blogPost.date}</span>
              <span>•</span>
              <span>{blogPost.author}</span>
              <span>•</span>
              <span>{blogPost.readTime} read</span>
            </div>
          </header>

          <div className="blog-featured-image"></div>

          <div className="blog-content" dangerouslySetInnerHTML={{ __html: blogPost.content }} />

          <div className="blog-footer-section">
            <div className="share-section">
              <h3>Share this article</h3>
              <div className="share-buttons">
                <button className="share-btn" aria-label="Share on Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </button>
                <button className="share-btn" aria-label="Share on LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </button>
                <button className="share-btn" aria-label="Share on Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <Link to="/blog" className="view-more-link">← View more articles</Link>
          </div>
        </div>
      </article>

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

export default BlogDetail;