import React from 'react';
import '../styles/Projects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Projects({ link, imgSrc, title, description, tags, isFocused, onMouseEnter, onMouseLeave, isUnfocused }) {
  // Conditionally apply classes based on the isFocused and isUnfocused props
  const projectClass = isFocused ? 'focused' : isUnfocused ? 'unfocused' : '';

  return (
    <section className='project'>
      <a 
        href={link} 
        target="_blank"
        className={`backgroundHover ${projectClass}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className={`backgroundBehind ${projectClass}`}></div>
        <div className='miniature'>
          <img src={imgSrc} alt='' />
        </div>
        <div className='description'>
          <div className='titleProject'>
            <h2>{title}</h2>
            <FontAwesomeIcon className='arrow' icon={faArrowRight} />
          </div>
          <p>{description}</p>
          <div className='tags'>
            {tags.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </div>
        </div>
      </a>
    </section>
  );
}

export default Projects;
