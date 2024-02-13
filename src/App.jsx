import React, { useState, useEffect, useRef } from 'react';
import { useDarkMode } from './Components/Darkmodecontext.jsx';
import { useInView } from 'react-intersection-observer';

// components
import P5Sketch from './Components/P5Sketch';
import Nav from './Components/Nav';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Footer from './Components/Footer';

// images
import passepasse from './assets/miniatures/passepasse.png';
import HRNet from './assets/miniatures/HRNet.png';
import argentBank from './assets/miniatures/argentBank.png';

import './App.scss';

function App() {
  //dark mode
  const { darkMode } = useDarkMode();

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
const { ref: educationRef, inView: educationInView } = useInView();


  // State to keep track of the topmost visible element
  const [topElement, setTopElement] = useState('about');

  useEffect(() => {
    // Determine the topmost visible element
    if (aboutInView) setTopElement('about');
    else if (projectsInView) setTopElement('projects');
    else if (educationInView) setTopElement('education');
  }, [aboutInView, projectsInView, educationInView]);

  return (
    <div className={`twoPages ${!darkMode ? 'lightMode' : ''}`}>
        <div id='frontPage'>
          <P5Sketch/>
        </div>
        <div className='appContainer'>
          <div className='leftColumn'>
            <Header />
            <Nav aboutId="about" projectsId="projects" educationId="education" activeElement={topElement}/>
            <Footer />
          </div>
          <div className='rightColumn'>
            <div><div id='about' className={`about ${topElement === 'about' ? 'active' : ''}`} ref={aboutRef}><About /></div></div>
            <div>
              <div id='projects' className={`projects ${topElement === 'projects' ? 'active' : ''}`} ref={projectsRef}>
                <Projects
                link='https://www.editionspassepasse.fr/'
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
                  link='https://hrnet-xi.vercel.app/'
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
                  link='https://argentbankdesign.vercel.app/'
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
              <section id='education' className={`educationSection ${topElement === 'education' ? 'active' : ''}`} ref={educationRef}>
                <Education
                  title="openClassrooms"
                  date="2022 - 2023"
                  diplomaTitle="JavaScript React Developer"
                  institution="OpenClassrooms"
                  content="A 14 months program sanctionned by a level 6 European Qualifications Framework diploma."
                  isFocused={focusedProject === 'openClassrooms'}
                  onMouseEnter={() => handleMouseEnter('openClassrooms')}
                  onMouseLeave={handleMouseLeave}
                  isUnfocused={isUnfocused && focusedProject !== 'openClassrooms'}
                />
                <Education
                  title="compLit"
                  date="2017 - 2019"
                  diplomaTitle="M.A. in comparative literature"
                  institution="Sorbonne Nouvelle"
                  content="An analysis of the politics of drone in contemporaneous fiction, and their influence on narrative structures."
                  isFocused={focusedProject === 'compLit'}
                  onMouseEnter={() => handleMouseEnter('compLit')}
                  onMouseLeave={handleMouseLeave}
                  isUnfocused={isUnfocused && focusedProject !== 'compLit'}
                />
                <Education
                  title="polSci"
                  date="2013 - 2015"
                  diplomaTitle="M.A. in European affairs"
                  institution="Sciences Po Lyon and ENS Lyon"
                  content="Case studies on the influence strategies of a French automobile manufacturer."
                  isFocused={focusedProject === 'polSci'}
                  onMouseEnter={() => handleMouseEnter('polSci')}
                  onMouseLeave={handleMouseLeave}
                  isUnfocused={isUnfocused && focusedProject !== 'polSci'}
                />
              </section>
            </div>
          </div>
        </div>
      </div>
  )
}

export default App;
