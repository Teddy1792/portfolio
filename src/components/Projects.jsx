import React from 'react';
import '../styles/Projects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Projects({ imgSrc, title, description, tags }) {
  return (
    <section className='project'>
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
    </section>
  );
}

export default Projects;
