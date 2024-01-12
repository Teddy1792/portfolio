import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Experience.scss';

function Experience({ date, diplomaTitle, institution, content }) {
  return (
    <section className="experiences">
      <div className="dates">
        <p>{date}</p>
      </div>
      <div className="information">
        <h2 className="diplomaTitle">{diplomaTitle}</h2>
        <h3 className="institution">{institution}</h3>
        <div className="content">
          <p>{content}</p>
        </div>
      </div>
    </section>
  );
}

Experience.propTypes = {
  date: PropTypes.string.isRequired,
  diplomaTitle: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Experience;