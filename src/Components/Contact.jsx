// Contact.jsx - Updated with navbar inside hero card
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../styles/Contact.css';

const Contact = () => {
  const { isDark, toggleTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, loading: true, error: null });
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus({ submitted: true, loading: false, error: null });
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => {
        setFormStatus({ submitted: false, loading: false, error: null });
      }, 5000);
    } catch (error) {
      setFormStatus({ submitted: false, loading: false, error: 'Failed to send message. Please try again.' });
    }
  };

  const faqs = [
    {
      question: "Are all courses really free?",
      answer: "Yes! All our courses are completely free. We believe in making quality data education accessible to everyone."
    },
    {
      question: "Do I get a certificate?",
      answer: "Yes, you'll receive a certificate of completion for each course you finish."
    },
    {
      question: "How long does it take to complete a course?",
      answer: "Course duration varies, but most can be completed in 10-25 hours at your own pace."
    },
    {
      question: "Can I use the courses for my business?",
      answer: "Absolutely! Our courses are designed to provide practical, applicable skills for professional use."
    }
  ];

  return (
    <div className={`contact-page ${isDark ? 'dark' : 'light'}`}>

      {/* HERO SECTION — navbar INSIDE the glassmorphic hero card */}
      <section className="contact-hero">
        <div className="contact-hero-card">

          {/* NAVBAR */}
          <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className="logo">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect width="28" height="28" rx="5" fill="url(#logoGradientContact)" />
                  <path d="M14 7L19 17H9L14 7Z" fill="white" />
                  <defs>
                    <linearGradient id="logoGradientContact" x1="0" y1="0" x2="28" y2="28">
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
          <div className="contact-hero-content">
            <div className="contact-hero-badge">Check out our new Tableau course!</div>
            <h1 className="contact-hero-title">Elevate your career with data</h1>
            <p className="contact-hero-subtitle">Access our Free Analytics Courses Now!</p>
            <Link to="/courses">
              <button className="btn-contact-start">Start Now</button>
            </Link>
            <Link to="/courses" className="contact-hero-helper">Not sure where to begin? →</Link>
          </div>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="contact-info-section">
        <div className="container-contact">
          <div className="contact-info-grid">
            <a href="mailto:contact@learndataskills.com" className="contact-info-card">
              <span className="contact-info-icon">📧</span>
              <h3 className="contact-info-title">Email Us</h3>
              <p className="contact-info-content">contact@learndataskills.com</p>
            </a>
            <a href="https://www.learndataskills.com/live-chat" className="contact-info-card">
              <span className="contact-info-icon">💬</span>
              <h3 className="contact-info-title">Live Chat</h3>
              <p className="contact-info-content">Available Mon-Fri, 9am-5pm EST</p>
            </a>
            <a href="https://www.linkedin.com/company/learndataskills" className="contact-info-card">
              <span className="contact-info-icon">📱</span>
              <h3 className="contact-info-title">Social Media</h3>
              <p className="contact-info-content">Follow us for updates</p>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-form-section">
        <div className="container-contact">
          <div className="form-wrapper">
            <div className="form-header">
              <h2 className="form-heading">Send us a Message</h2>
              <p className="form-subheading">
                Whether you have questions, feedback, or partnership inquiries, we're here to help.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <input
                    type="text" id="name" name="name"
                    value={formData.name} onChange={handleChange}
                    required className="form-input" placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input
                    type="email" id="email" name="email"
                    value={formData.email} onChange={handleChange}
                    required className="form-input" placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="company" className="form-label">Company / Organization (Optional)</label>
                <input
                  type="text" id="company" name="company"
                  value={formData.company} onChange={handleChange}
                  className="form-input" placeholder="Your Company"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message" name="message"
                  value={formData.message} onChange={handleChange}
                  required rows="6" className="form-textarea"
                  placeholder="Tell us how we can help..."
                />
              </div>
              {formStatus.error && <div className="form-error">{formStatus.error}</div>}
              {formStatus.submitted && (
                <div className="form-success">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}
              <button type="submit" className="form-submit-btn" disabled={formStatus.loading}>
                {formStatus.loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="container-contact">
          <h2 className="section-heading-contact">Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="faq-cta">
            <p>Still have questions?</p>
            <Link to="/about">
              <button className="btn-faq">Learn More About Us</button>
            </Link>
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

export default Contact;