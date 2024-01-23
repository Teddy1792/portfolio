import React from 'react';
import PropTypes from 'prop-types';
import { useDarkMode } from './DarkModeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import '../styles/Education.scss';

function Education({ date, diplomaTitle, institution, content, isFocused, onMouseEnter, onMouseLeave, isUnfocused }) {
  const { darkMode } = useDarkMode();
  const educationClass = isFocused ? 'focused' : isUnfocused ? 'unfocused' : '';

  return (
<div
  className={`education backgroundHover ${educationClass} ${!darkMode ? 'lightMode' : ''}`}
  onMouseEnter={onMouseEnter}
  onMouseLeave={onMouseLeave}
>
      <div className={`backgroundBehind ${educationClass}`}></div>
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
    </div>
  );
}

Education.propTypes = {
  date: PropTypes.string.isRequired,
  diplomaTitle: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Education;
