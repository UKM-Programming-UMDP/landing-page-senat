import { useState } from "react";
import img from "@assets/logo_senat.png";

export const Navbar = () => {
  const [toggler, setToggler] = useState(false);
  const [contactDropdown, setContactDropdown] = useState(false);
  console.log(contactDropdown);
  return (
    <nav className="bg-dark-blue fixed top-0 left-0 right-0 py-0 shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between px-5 relative">
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
          <ul className="flex flex-col lg:flex-row lg:ml-auto space-y-2 lg:space-y-0 lg:space-x-4 p-4 lg:p-0">
            <li>
              <a
                className="text-white hover:text-gray-400"
                href="/"
                id="nav-home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-gray-400"
                href="/about"
                id="nav-about"
              >
                About Us
              </a>
            </li>
            <li className="relative">
              <button
                onClick={() => setContactDropdown(!contactDropdown)}
                className="text-white hover:text-gray-400 flex items-center"
              >
                Contact
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {contactDropdown && (
                <div className={`bg-dark-blue w-full lg:fixed rounded-b-lg`}>
                  <ul className="py-2">
                    <li>
                      <a
                        className="block px-4 py-2 text-white hover:bg-gray-700"
                        href="/contact/social-media"
                      >
                        Media Sosial
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-4 py-2 text-white hover:bg-gray-700"
                        href="/contact/form-aspirasi"
                      >
                        Form Aspirasi
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
