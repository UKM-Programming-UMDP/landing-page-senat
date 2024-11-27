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

  return (
    <>
      <Popover className="relative h-full lg:block flex flex-col jutify-center items-center">
        <PopoverButton
          className="outline-none h-full flex items-center gap-1 hover:text-gray-400"
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
        <PopoverPanel className="flex flex-col z-50 bg-dark-blue rounded-b-lg gap-3 lg:fixed py-3 px-5">
          {listMenu.map((data, index) => (
            <span
              key={index}
              onClick={() => navigate(data.link)}
              className="text-white hover:text-gray-400 cursor-pointer"
            >
              {data.name}
            </span>
          ))}
        </PopoverPanel>
      </Popover>
    </>
  );
};
