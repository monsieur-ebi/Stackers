import './styles/main.css';
import Navbar from './components/Navbar';
import { Routes, Route} from "react-router-dom";
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="about" element={<></>} />
      </Routes>
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
