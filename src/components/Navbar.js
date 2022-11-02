import '../styles/main.css';
import { Link } from "react-router-dom";

function Navbar() {
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
        </div>
      </nav>
    </>
  );
}

export default Navbar;
