import './styles/main.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Hero from './components/Hero';
import Features from './components/Features';
import Team from './components/Team';
import Cta from './components/Cta';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <>
          <Navbar />
          <Hero />
          <Features />
          <Team />
          <Cta />
          <Footer />
          </>
        } />
        <Route path="/about" element={<></>} />
        <Route path="/events" element={<>
          <Navbar />
        </>} />
      </Routes>
      
    </div>
  );
}

export default App;
