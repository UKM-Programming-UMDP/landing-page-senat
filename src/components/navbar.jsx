import { useState } from "react";
import img from "@assets/Logo_senat.png";
import { dataNavbar } from "@content/navbar/dataNav";
import { Dropdown } from "@common/components/dropdown";

export const Navbar = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <nav className="fixed z-50 w-full shadow-lg bg-dark-blue ps-10 pe-10">
      <div className="container flex items-center justify-between mx-auto">
        <a
          className="flex-shrink-0"
          href="#"
          onClick={() => fullpageApi.scrollTo(0)}
        >
          <img src={img} width="100px" alt="logo" />
        </a>
        <button
          className="block text-white lg:hidden focus:outline-none"
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
          <ul className="flex flex-col h-full p-4 space-y-2 lg:flex-row lg:ml-auto lg:space-y-0 lg:space-x-4 lg:p-0">
            <li className="relative flex items-center justify-center h-full text-center">
              <a className="mx-5 hover:text-gray-400" href="/" id="nav-home">
                Home
              </a>
            </li>
            <span className="items-center mx-auto text-center">
              <Dropdown label="About" listMenu={dataNavbar.about} />
            </span>
            <span className="flex justify-center mx-auto">
              <Dropdown label="Contact" listMenu={dataNavbar.contact} />
            </span>
          </ul>
        </div>
      </div>
    </nav>
  );
};
