import React, { useState } from 'react';

//import components
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

//import img sources
import passepasse from './assets/miniatures/passepasse.png';
import HRNet from './assets/miniatures/HRNet.png';
import argentBank from './assets/miniatures/argentBank.png';

import './App.scss';

function App() {
  const [focusedProject, setFocusedProject] = useState(null);
  const [isUnfocused, setIsUnfocused] = useState(false);

  const handleMouseEnter = (projectName) => {
    setFocusedProject(projectName);
    setIsUnfocused(true);
  };

  const handleMouseLeave = () => {
    setFocusedProject(null);
    setIsUnfocused(false);
  };


  return (
    <div className='appContainer'>
      <div className='leftColumn'>
        <Header />
        <Nav />
        <Footer />
      </div>
      <div className='rightColumn'>
        <About />
        <Projects
          imgSrc={passepasse}
          title="Les éditions PassePasse"
          description="The shop front of an independent publishing house. An immersive shopping experience, fully coded and designed using React and vectorial illustrations."
          tags={['React', 'Stripe']}
          isFocused={focusedProject === 'passepasse'}
          onMouseEnter={() => handleMouseEnter('passepasse')}
          onMouseLeave={handleMouseLeave}
          isUnfocused={isUnfocused && focusedProject !== 'passepasse'}
        />
        <Projects
          imgSrc={HRNet}
          title="HRNet"
          description="A web-based database management system for companies. User can add new employees through the use of a secure form."
          tags={['React', 'Redux']}
          isFocused={focusedProject === 'HRNet'}
          onMouseEnter={() => handleMouseEnter('HRNet')}
          onMouseLeave={handleMouseLeave}
          isUnfocused={isUnfocused && focusedProject !== 'HRNet'}
        />
        <Projects
          imgSrc={argentBank}
          title="ArgentBank"
          description="A login system for a bank. User can connect through a secure identification process and access their account."
          tags={['React', 'NodeJS']}
          isFocused={focusedProject === 'argentBank'}
          onMouseEnter={() => handleMouseEnter('argentBank')}
          onMouseLeave={handleMouseLeave}
          isUnfocused={isUnfocused && focusedProject !== 'argentBank'}
        />
        <Experience />
      </div>
    </div>
  )
}

export default App;
