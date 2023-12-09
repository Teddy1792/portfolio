import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state

function App() {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <Router>
      <Header isDarkMode={isDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

