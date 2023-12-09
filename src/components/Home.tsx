import React from 'react';
import { useSelector } from 'react-redux';

import '../styles/Home.scss';

const Home = () => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <section>
      <div className={`summary ${isDarkMode ? 'dark-mode' : ''}`}>
        <p className='sumText'>
          I'm a <span className='stressed'>front-end developer</span> based in Paris. I have a passion for crafting 
          engaging and user-friendly web experiences. With a <span className='stressed'>strong foundation in 
          front-end technologies</span>, I bring ideas to life through clean and efficient code.
        </p>
        <div className='tags'>
          <p>JavaScript</p>
          <p>React</p>
          <p>Sass</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
