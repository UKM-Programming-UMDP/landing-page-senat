import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Dropdown = ({ label, listMenu }) => {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);

  const handleDropDown = () => {
    setDropdown(!dropdown);
    if (label === "About") {
      navigate("about");
    }
  };

  const handleClick = (anchor) => {
    localStorage.setItem("gotoSection", anchor);
    navigate("/about");
  };

  return (
    <>
      <Popover className="relative flex flex-col items-center h-full lg:block jutify-center">
        <PopoverButton
          className="flex items-center h-full gap-1 outline-none hover:text-gray-400"
          onClick={() => handleDropDown()}
        >
          {label}
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
        </PopoverButton>
        <PopoverPanel className="z-50 flex flex-col gap-3 px-5 py-3 text-left rounded-b-lg bg-dark-blue lg:fixed">
          {listMenu.map((data, index) => (
            <a
              key={index}
              href={data.link}
              className="text-white hover:text-gray-400"
              onClick={() => handleClick(item.anchor)}
            >
              {data.name}
            </a>
          ))}
        </PopoverPanel>
      </Popover>
    </>
  );
};
