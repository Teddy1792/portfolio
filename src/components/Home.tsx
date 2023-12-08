import React from 'react';
import { connect } from 'react-redux';

import '../styles/Home.scss';

const Home = ({ isDarkMode, toggleTheme }) => {
  return (
    <section>
      <div className='summary'>
        <p className='sumText'>
          I'm a front-end developer based in Paris. I have a passion for crafting 
          engaging and user-friendly web experiences. With a strong foundation in 
          front-end technologies, I bring ideas to life through clean and efficient code.
        </p>
        <button onClick={toggleTheme}>Toggle Theme</button> {/* Example button */}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  isDarkMode: state.isDarkMode,
});

const mapDispatchToProps = (dispatch) => ({
  toggleTheme: () => dispatch(toggleThemeAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
