import React, { useState, useEffect } from 'react';
import '../styles/Nav.scss';

function Nav() {
  const [activeItem, setActiveItem] = useState(null);

  // Function to handle scrolling to an element
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveItem(id);
    }
  };

  // Function to handle scroll event
  const handleScroll = () => {
    // Logic to determine which section is in view
    // Example:
    // if (window.pageYOffset >= /* position of a specific section */) {
    //   setActiveItem('about');
    // } else if (...) {
    //   // other conditions
    // }
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <ul>
        <li
          className={activeItem === 'about' ? 'active' : ''}
          onMouseEnter={() => setActiveItem('about')}
          onMouseLeave={() => setActiveItem(null)}
          onClick={() => scrollToElement('about')}
        >
          <div className='line'></div>
          <a href="#about">About</a>
        </li>
        <li
          className={activeItem === 'projects' ? 'active' : ''}
          onMouseEnter={() => setActiveItem('projects')}
          onMouseLeave={() => setActiveItem(null)}
          onClick={() => scrollToElement('projects')}
        >
          <div className='line'></div>
          <a href="#projects">Projects</a>
        </li>
        <li
          className={activeItem === 'experience' ? 'active' : ''}
          onMouseEnter={() => setActiveItem('experience')}
          onMouseLeave={() => setActiveItem(null)}
          onClick={() => scrollToElement('experience')}
        >
          <div className='line'></div>
          <a href="#experience">Experience</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
