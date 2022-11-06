import React from 'react'
import { Link } from "react-router-dom";
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import youtube from '../images/icon-youtube.svg'
import instagram from '../images/icon-instagram.svg';

const Footer = () => {
  return (
    <>
        <footer className="bg-veryDarkBlue">
            <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
                <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
                    <div className="mx-auto my-6 text-center text-white md:hidden">
                        Copyright &copy; 2022, All Rights Reserved
                    </div>
                    <div>
                        <h3 className="h-8 text-bold text-2xl text-white">Stackerspool</h3>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <a href="https://facebook.com/Stackers-pool-113968921286172/">
                            <img src={facebook} alt="facebook" className="h-8"/>
                        </a>
                        <a href="https://twitter.com/Stackers_Pool">
                            <img src={twitter} alt="Twitter" className="h-8"/>
                        </a>
                        <a href="https://instagram.com/">
                            <img src={instagram} alt="instagram" className="h-8"/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCgtThbeYafVjuQKGLcr-J5Q">
                            <img src={youtube} alt="youtube" className="h-8"/>
                        </a>
                    </div>
                </div>
                <div className="flex justify-around space-x-32">
                    <div className="flex flex-col space-y-3 text-white">
                        <Link className="hover:text-darkGrayishBlue" to="/">Home</Link>
                        <Link className="hover:text-darkGrayishBlue" to="/about">About</Link>
                        <Link className="hover:text-darkGrayishBlue" to="/projects">Projects</Link>
                        <Link className="hover:text-darkGrayishBlue" to="/events">Events</Link>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <form action="mailto:stackerspool@gmail.com">
                        <div className="flex space-x-3">
                            <input type="text" className="flex-1 px-4 rounded-full focus:outline-none" placeholder="Enter your mail"/>
                            <button className="px-6 py-2 bg-white rounded-full hover:bg-darkGrayishBlue focus:outline-none">Send</button>
                        </div>
                    </form>
                    <div className="hidden text-white md:block">
                        Copyright &copy; 2022, All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer