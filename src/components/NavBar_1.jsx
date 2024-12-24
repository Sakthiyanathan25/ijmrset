import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/IJMRSET-Logo.png';
import Login_gif from '../assets/login.gif';
import upload_gif from '../assets/upload.gif';
import Arrow from '../assets/RightArrow.png';

export default function NavBar({ NavColor, SubNavColor }) {
  const [isSticky, setIsSticky] = useState(false);
  const [onNav, setOnNav] = useState('');

  // Function to handle scroll and toggle sticky class
  const handleScroll = () => {
    const stickyElement = document.getElementById('stickyNav');
    if (stickyElement) {
      // When the page is scrolled past the navbar's position
      if (
        window.scrollY >= stickyElement.offsetTop &&
        (!window.scrollY >= 2 || window.scrollY != 0)
      ) {
        setIsSticky(true); // Make navbar sticky
      } else {
        setIsSticky(false); // Reset sticky
      }
    }
  };

  // Add and clean up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`flex flex-col gap-5 z-30 sticky top-0 transition-all duration-300 ease-in-out ${isSticky ? 'pt-0 mx-0' : 'pt-5 mx-5'}`}
      id="stickyNav"
    >
      <div
        className={`${NavColor}  px-5 flex justify-between items-center p-2 transition-all duration-300 ease-in-out ${isSticky ? '' : 'rounded-xl'}`}
        onMouseLeave={() => setOnNav('')}
      >
        <div className="w-[10%]">
          <img src={Logo} alt="Logo" className="h-[60px]" />
        </div>

        <ul className="w-[50%] flex justify-around text-black font-lora text-lg font-semibold rounded-xl">
          <li onMouseEnter={() => setOnNav('Home')} className="h-12 flex items-center">
            <Link to="/">Home</Link>
          </li>
          <li
            onMouseEnter={() => setOnNav('EditorBoard')}
            className="relative  flex gap-2 items-center  h-12"
          >
            Editor Board
            <img
              src={Arrow}
              alt="arrow"
              className={`h-3 mt-1 transition-all duration-300 ease-in-out ${onNav === 'EditorBoard' ? 'rotate-180' : ''}`}
            />
            <div
              className={`${SubNavColor}  absolute z-10 w-[130px] x flex-col  shadow-xl  divide-y-2 rounded-md  top-14 transition-all duration-300 ease-in-out ${onNav === 'EditorBoard' ? 'flex' : 'hidden'} </li>}`}
            >
              <Link to="/editor-desk" className="text-center py-2">
                Editor Desk
              </Link>
              <Link to="/editor-board" className="text-center py-2">
                Editor Board
              </Link>
            </div>
          </li>

          <li onMouseEnter={() => setOnNav('Authors')} className="h-12 flex items-center">
            <Link to="/author">Author</Link>
          </li>
          <li onMouseEnter={() => setOnNav('Issues')} className="h-12 flex items-center">
            <Link to="/issues">Issues</Link>
          </li>
          <li onMouseEnter={() => setOnNav('Reviewer')} className="h-12 flex items-center">
            <Link to="/reviewer">Reviewer</Link>
          </li>
          <li onMouseEnter={() => setOnNav('Contact')} className="h-12 flex items-center">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <ul className="w-[30%] flex justify-around text-white font-lora text-lg font-semibold">
          <li className="bg-[#250a50] p-3 rounded-xl flex gap-2">
            <img src={Login_gif} alt="login" className="w-[30px]" />
            <button type="button">RMS Login</button>
          </li>
          <a href="mailto:ijmrset@gmail.com" className="bg-[#250a50] p-3 rounded-xl flex gap-2">
            <img src={upload_gif} alt="submit" className="w-[30px]" />
            <button type="button">Submit Paper</button>
          </a>
        </ul>
      </div>
    </div>
  );
}
