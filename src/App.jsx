// App.js - Main Application with Complete Routing
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// Import Components
import Home from './Components/Home';
import Courses from './Components/Courses';
import CourseDetail from './Components/CourseDetail';
import Blog from './Components/Blog';
import BlogDetail from './Components/BlogDetail';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;