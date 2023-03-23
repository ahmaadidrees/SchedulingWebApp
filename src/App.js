import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import About from './Components/About';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <HeroSection />
     <About />
     <Gallery/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
