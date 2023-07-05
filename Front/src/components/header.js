import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import imglogo from "../images/icono_1.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenuHandler = () => {
    setIsMenuOpen(false);
  };
  const openMenuHandler = () => {
    setIsMenuOpen(true);
  };

  return (
    <div className="p-5 mb-5 sm:mb-0">
      <div className="flex flex-row items-center w-full justify-between p">
        <Link to="/">
          <a className="flex flex-row items-center transform hover:scale-105">
            <div className="max-w-[3rem] sm:max-w-[6rem]">
              <img src={imglogo} layout="fill" />
            </div>
            <span className="font-bold text-xl sm:text-4xl">
              MY<span className="text-cetys-yellow">FOXY</span>
              <br />
              Art
            </span>
          </a>
        </Link>

        <button
          className="transform hover:scale-105 hover:text-cetys-yellow"
          onClick={openMenuHandler}
        >
          <BiMenuAltRight className="text-4xl sm:text-[50px]" />
        </button>
      </div>

      <div
        className={`z-10 flex flex-col items-center fixed h-screen bg-anemia-yellow px-10 py-7 text-xl transition-all duration-300 top-0 ${
          isMenuOpen ? "right-0" : "-right-64"
        }`}
      >
        <button
          className="absolute right-8 hover:text-red-500"
          onClick={closeMenuHandler}
        >
          <AiOutlineCloseCircle className="transform hover:scale-105" />
        </button>
        <h1 className="font-bold py-7 pb-3 text-2xl">MENU</h1>
        <div className="flex flex-col w-44 gap-y-4 text-2xl">
          <Link to="/">
            <a className="hover:underline">Home</a>
          </Link>
          <Link to="/about">
            <a className="hover:underline">About Us</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
