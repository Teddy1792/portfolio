import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import '../styles/Education.scss';

function Education({ date, diplomaTitle, institution, content }) {
  return (
    <section className="education">
      <div className="dates">
        <p>{date}</p>
      </div>
      <div className="information">
        <h2 className="diplomaTitle">
          {diplomaTitle} <FontAwesomeIcon icon={faAward} className='icon'/>
        </h2>
        <h3 className="institution">{institution}</h3>
        <div className="content">
          <p>{content}</p>
        </div>
      </div>
    </section>
  );
}

Education.propTypes = {
  date: PropTypes.string.isRequired,
  diplomaTitle: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Education;
