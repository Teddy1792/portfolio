import { useDarkMode } from './darkmodecontext';
import '../styles/About.scss';

function About () {
  const { darkMode } = useDarkMode();
    return (
        <section className={`about ${!darkMode ? 'lightMode' : ''}`}>
          <p>I used to work in the Public sector or in international institutions, 
            where I longed for my adolescent days, spent exploring unknown software 
            for <span className='stressed'>video editing</span> or managing <span className='stressed'>php bulletin boards</span>. I am now back to my /root/s, 
            and proud to present my <span className='stressed'>personal portfolio</span>.</p>
          <p>As a <span className='stressed'>front-end developer</span>, I am happy to produce immersive and uniquely designed websites. 
            Check out my projects below!</p>
          <p>When I’m not writing lines of code, I’m usually working on a novel, 
            running around Paris to prepare for the marathon or searching for the next project that I want to delve into.</p>
        </section>
      )
}

export default About