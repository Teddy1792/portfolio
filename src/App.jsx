import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

// components
import P5Sketch from './components/P5Sketch';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

// images
import passepasse from './assets/miniatures/passepasse.png';
import HRNet from './assets/miniatures/HRNet.png';
import argentBank from './assets/miniatures/argentBank.png';

import './App.scss';

function App() {
  // Handle the focusing and unfocusing of the projects
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

//check whether an element is on top:
const { ref: aboutRef, inView: aboutInView } = useInView();
const { ref: projectsRef, inView: projectsInView } = useInView();
const { ref: experienceRef, inView: experienceInView } = useInView();


  // State to keep track of the topmost visible element
  const [topElement, setTopElement] = useState('about');

  useEffect(() => {
    // Determine the topmost visible element
    if (aboutInView) setTopElement('about');
    else if (projectsInView) setTopElement('projects');
    else if (experienceInView) setTopElement('experience');
  }, [aboutInView, projectsInView, experienceInView]);

  return (
    <div className='twoPages'>
      <div id='frontPage'>
        <P5Sketch/>
      </div>
      <div className='appContainer'>
        <div className='leftColumn'>
          <Header />
          <Nav aboutId="about" projectsId="projects" experienceId="experience" activeElement={topElement}/>
          <Footer />
        </div>
        <div className='rightColumn'>
          <div><div id='about' className={`about ${topElement === 'about' ? 'active' : ''}`} ref={aboutRef}><About /></div></div>
          <div>
            <div id='projects' className={`projects ${topElement === 'projects' ? 'active' : ''}`} ref={projectsRef}>
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
            </div>
          </div>
          <div>
            <div id='experience' className={`experience ${topElement === 'experience' ? 'active' : ''}`} ref={experienceRef}>
              <Experience />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
