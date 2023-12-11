import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
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
        <Projects />
        <Experience />
      </div>
    </div>
  )
}

export default App
