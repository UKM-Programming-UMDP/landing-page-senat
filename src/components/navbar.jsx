import { useState } from "react";
import img from "@assets/logo_senat.png";
import { useNavigate } from "react-router-dom";
import { dataNavbar } from "@content/navbar/dataNav";
import { Dropdown } from "../common/components/dropdown";

export const Navbar = () => {
  const [toggler, setToggler] = useState(false);
  const navigate = useNavigate();
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const linkAbout = () => {
    setAboutDropdown(!aboutDropdown);
    navigate("about");
  };

  return (
    <nav className="bg-dark-blue fixed w-full shadow-lg z-50">
      <div className="container lg:p-0 ps-5 pe-5 mx-auto flex items-center justify-between relative">
        <a className="flex-shrink-0" href="#">
          <img src={img} width="100px" alt="logo" />
        </a>

        <button
          className="block lg:hidden text-white focus:outline-none"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setToggler(!toggler)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div
          className={`absolute left-0 right-0 top-full transition-all duration-500 ease-in-out bg-dark-blue lg:static lg:flex lg:items-center lg:w-auto w-full overflow-hidden ${
            toggler ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } lg:max-h-full lg:opacity-100`}
        >
          <ul className="flex flex-col h-full lg:flex-row lg:ml-auto space-y-2 lg:space-y-0 lg:space-x-4 p-4 lg:p-0">
            <li className="relative h-full items-center text-center flex justify-center">
              <a className="hover:text-gray-400 mx-5" href="/" id="nav-home">
                Home
              </a>
            </li>
            <button
              className="mx-auto items-center"
              onClick={() => linkAbout()}
            >
              <Dropdown label="About" listMenu={dataNavbar.about} />
            </button>
            <span className="mx-auto flex justify-center">
              <Dropdown label="Contact" listMenu={dataNavbar.contact} />
            </span>
          </ul>
        </div>
      </div>
    </nav>
  );
};
