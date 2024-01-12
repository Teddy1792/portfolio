import React, { useState, useEffect } from 'react';
import '../styles/Nav.scss';

function Nav({ aboutId, projectsId, educationId, activeElement }) {
  const [activeItem, setActiveItem] = useState(null);

  // Update activeItem based on activeElement prop
  useEffect(() => {
    setActiveItem(activeElement);
  }, [activeElement]);

  // Function to handle scrolling to an element
  const scrollToElement = (id, offset = 0) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth',
    });
      setActiveItem(id);
    }
  };

  const handleScroll = () => {

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
          onClick={() => scrollToElement(aboutId, 100)}
        >
          <div className='line'></div>
          <div href="#about" className='anchor'>About</div>
        </li>
        <li
          className={activeItem === 'projects' ? 'active' : ''}
          onMouseEnter={() => setActiveItem('projects')}
          onClick={() => scrollToElement(projectsId)}
        >
          <div className='line'></div>
          <div href="#projects" className='anchor'>Projects</div>
        </li>
        <li
          className={activeItem === 'education' ? 'active' : ''}
          onMouseEnter={() => setActiveItem('education')}
          onClick={() => scrollToElement(educationId)}
        >
          <div className='line'></div>
          <div href="#education" className='anchor'>Education</div>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
