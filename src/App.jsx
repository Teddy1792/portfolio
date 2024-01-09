import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import passepasse from './assets/miniatures/passepasseSnapshot.png';
import Experience from './components/Experience';
import Footer from './components/Footer';
import './App.scss';



function App() {
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
        description="The shop front of an independent publishing house. An immersive shopping experience, fully coded and designed using React and vectorial illustrations." // Pass the description as a prop
        tags={['React', 'Stripe']}
        />
        <Projects
        imgSrc={passepasse}
        title="HRNet"
        description="The shop front of an independent publishing house. An immersive shopping experience, fully coded and designed using React and vectorial illustrations." // Pass the description as a prop
        tags={['React', 'Stripe']}
        />
        <Experience />
      </div>
    </div>
  )
}

export default App
