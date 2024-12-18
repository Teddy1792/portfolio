import React, { useState, useEffect, useRef } from "react";
import { useDarkMode } from "./components/darkModeContext.jsx";
import { useInView } from "react-intersection-observer";

// components
import P5Sketch from "./components/P5Sketch";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";

// images
import passepasse from "./assets/miniatures/passepasse.png";
import HRNet from "./assets/miniatures/HRNet.png";
import alfaRomeo from "./assets/miniatures/alfaRomeo.png";
import hipto from "./assets/miniatures/hipto.png";
import payloadLogo from "./assets/payloadLogo.svg";

import "./App.scss";

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
  const [topElement, setTopElement] = useState("about");

  useEffect(() => {
    // Determine the topmost visible element
    if (aboutInView) setTopElement("about");
    else if (projectsInView) setTopElement("projects");
    else if (educationInView) setTopElement("education");
  }, [aboutInView, projectsInView, educationInView]);

  return (
    <div className={`twoPages ${!darkMode ? "lightMode" : ""}`}>
      <div id="frontPage">
        <P5Sketch />
      </div>
      <div className="appContainer">
        <div className="leftColumn">
          <Header />
          <Nav
            aboutId="about"
            projectsId="projects"
            educationId="education"
            activeElement={topElement}
          />
          <Footer />
        </div>
        <div className="rightColumn">
          <div>
            <div
              id="about"
              className={`about ${topElement === "about" ? "active" : ""}`}
              ref={aboutRef}
            >
              <About />
            </div>
          </div>
          <div>
            <div className="stack">
              <h2>My stack</h2>
              <div className="stackIcon">
                <div className="icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                  <p>TypeScript</p>
                </div>
                <div className="icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                  <p>ReactJS</p>
                </div>
                <div className="icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
                  <p>NextJS</p>
                </div>
                <div className="icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
                  <p>MongoDB</p>
                </div>
                <div className="icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" />
                  <p>Firebase</p>
                </div>
                <div className="icon">
                  <img src={payloadLogo} />
                  <p>Payload CMS</p>
                </div>
                <div className="icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                  <p>Tailwind</p>
                </div>
                <div className="icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
                  <p>Sass</p>
                </div>
                <div className="icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                  <p>GIT</p>
                </div>
                <div className="icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg" />
                  <p>Notion</p>
                </div>
                <div className="icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                  <p>Figma</p>
                </div>
                {/* 
                <div className="icon">
                  <img src={copilot} alt="copilot" />
                  <p>Copilot</p>
                </div>
                <div className="icon">
                  <img src={chatgpt} alt="Chatgpt" />
                  <p>Chatgpt</p>
                </div>
                <div className="icon">
                  <img src={midjourney} alt="Midjourney" />
                  <p>Midjourney</p>
                </div> */}
              </div>
            </div>
            <div
              id="projects"
              className={`projects ${
                topElement === "projects" ? "active" : ""
              }`}
              ref={projectsRef}
            >
              <h2>Employment</h2>
              <Projects
                link="https://hipto.com/"
                imgSrc={hipto}
                title="hipto"
                description="During a six month internship, I developed Landing pages for prestigious clients and took care of integrating and tracking. I also developed the testing units of a custom made CMS using NextJS. See example below!"
                tags={["React", "TailWind", "NextJS"]}
                isFocused={focusedProject === "hipto"}
                onMouseEnter={() => handleMouseEnter("hipto")}
                onMouseLeave={handleMouseLeave}
                isUnfocused={isUnfocused && focusedProject !== "hipto"}
              />
              <Projects
                link="https://alfa-romeo-landpage.vercel.app"
                imgSrc={alfaRomeo}
                title="Alfa Romeo"
                description="A custom-made landpage using a dynamic form and RESTful APIs in order to locate the customer and notify the client."
                tags={["React"]}
                isFocused={focusedProject === "argentBank"}
                onMouseEnter={() => handleMouseEnter("argentBank")}
                onMouseLeave={handleMouseLeave}
                isUnfocused={isUnfocused && focusedProject !== "argentBank"}
              />
              <h2>Freelance</h2>
              <Projects
                link="https://www.editionspassepasse.fr/"
                imgSrc={passepasse}
                title="Les éditions PassePasse"
                description="The shop front of an independent publishing house. An immersive shopping experience, fully coded and designed using React and vectorial illustrations."
                tags={["React", "Stripe"]}
                isFocused={focusedProject === "passepasse"}
                onMouseEnter={() => handleMouseEnter("passepasse")}
                onMouseLeave={handleMouseLeave}
                isUnfocused={isUnfocused && focusedProject !== "passepasse"}
              />
              <Projects
                link="https://hrnet-xi.vercel.app/"
                imgSrc={HRNet}
                title="HRNet"
                description="A web-based database management system for companies. User can add new employees through the use of a secure form."
                tags={["React", "Redux"]}
                isFocused={focusedProject === "HRNet"}
                onMouseEnter={() => handleMouseEnter("HRNet")}
                onMouseLeave={handleMouseLeave}
                isUnfocused={isUnfocused && focusedProject !== "HRNet"}
              />
            </div>
          </div>
          <div>
            <section
              id="education"
              className={`educationSection ${
                topElement === "education" ? "active" : ""
              }`}
              ref={educationRef}
            >
              <Education
                title="DataScientest"
                date="2025 - 2026"
                diplomaTitle="Fullstack engineer"
                institution="DataScientest"
                content="An 18 months Master's program and apprenticeship sanctionned by a level 7 European Qualifications Framework diploma."
                isFocused={focusedProject === "DataScientest"}
                onMouseEnter={() => handleMouseEnter("DataScientest")}
                onMouseLeave={handleMouseLeave}
                isUnfocused={isUnfocused && focusedProject !== "DataScientest"}
              />
              <Education
                title="openClassrooms"
                date="2022 - 2023"
                diplomaTitle="JavaScript React Developer"
                institution="OpenClassrooms"
                content="A 14 months Bachelor's program sanctionned by a level 6 European Qualifications Framework diploma."
                isFocused={focusedProject === "openClassrooms"}
                onMouseEnter={() => handleMouseEnter("openClassrooms")}
                onMouseLeave={handleMouseLeave}
                isUnfocused={isUnfocused && focusedProject !== "openClassrooms"}
              />
              <Education
                title="compLit"
                date="2017 - 2019"
                diplomaTitle="M.A. in comparative literature"
                institution="Sorbonne Nouvelle"
                content="An analysis of the politics of drone in contemporaneous fiction, and their influence on narrative structures."
                isFocused={focusedProject === "compLit"}
                onMouseEnter={() => handleMouseEnter("compLit")}
                onMouseLeave={handleMouseLeave}
                isUnfocused={isUnfocused && focusedProject !== "compLit"}
              />
              <Education
                title="polSci"
                date="2013 - 2015"
                diplomaTitle="M.A. in European affairs"
                institution="Sciences Po Lyon and ENS Lyon"
                content="Case studies on the influence strategies of a French automobile manufacturer."
                isFocused={focusedProject === "polSci"}
                onMouseEnter={() => handleMouseEnter("polSci")}
                onMouseLeave={handleMouseLeave}
                isUnfocused={isUnfocused && focusedProject !== "polSci"}
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
