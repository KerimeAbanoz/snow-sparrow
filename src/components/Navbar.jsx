// import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import FeaturedGames from "./FeaturedGames";
import Footer from "./Footer";
import About from "./About";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <BrowserRouter>
      <div
        style={{ backgroundColor: `${color}` }}
        className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
      >
        <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
          <NavLink to="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            Captur
          </h1>
        </NavLink>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4">
            <NavLink to="/">About</NavLink>
          </li>
          <li className="p-4">
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li className="p-4">
            <NavLink to="/work">Work</NavLink>
          </li>
          <li className="p-4">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

          {/* Mobile Button */}
          <div onClick={handleNav} className="block sm:hidden z-10">
            {nav ? (
              <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
            ) : (
              <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
            )}
          </div>
          {/* Mobile Menu */}
          <div
            className={
              nav
                ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
            }
          >
            <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <NavLink to="/">About</NavLink>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <NavLink to="/#gallery">Gallery</NavLink>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <NavLink to="/#work">Work</NavLink>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <NavLink to="/#contact">Contact</NavLink>
            </li>
          </ul>
          </div>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/gallery" element={<FeaturedGames />} />
        <Route exact path="/work" element={<FeaturedGames />} />
        <Route exact path="/contact" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navbar;
