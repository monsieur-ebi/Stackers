import '../styles/main.css';
import { Link } from "react-router-dom";
import { useRef } from 'react'; 

function Navbar() {

  const btn = useRef();
  const nav = useRef();

  const menuToggle = () => {
    btn.current.classList.toggle('open');
    nav.current.classList.toggle('flex');
    nav.current.classList.toggle('hidden');
  }

  return (
    <>
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <h1 className="font-bold text-xl">Stackerspool</h1>
          </div>
          <div className="hidden space-x-6 md:flex ">
            <Link className="hover:text-darkGrayishBlue" to="/">Home</Link>
            <Link className="hover:text-darkGrayishBlue" to="/about">About</Link>
            <Link className="hover:text-darkGrayishBlue" to="/projects">Projects</Link>
            <Link className="hover:text-darkGrayishBlue" to="/events">Events</Link>
          </div>
          <Link to="" className="hidden p-2 px-6 pt-2 text-white bg-black rounded-full baseline hover:bg-white hover:text-black md:block">Get Started</Link>

          <button onClick={menuToggle} ref={btn} className="block hamburger md:hidden focus:outline-none" id="menu-btn">
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        <div className="md:hidden">
            <div className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md" ref={nav}>
            <Link className="hover:text-darkGrayishBlue" to="/">Home</Link>
            <Link className="hover:text-darkGrayishBlue" to="/about">About</Link>
            <Link className="hover:text-darkGrayishBlue" to="/projects">Projects</Link>
            <Link className="hover:text-darkGrayishBlue" to="/events">Events</Link>
            </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
