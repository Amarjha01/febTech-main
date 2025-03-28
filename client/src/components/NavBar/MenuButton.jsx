import React from "react";

const MenuButton = ({ handleOpen, isMenuOpen }) => (
  <div className="flex ml-auto lg:hidden">
    <button onClick={handleOpen} className="focus:outline-none">
      <svg
        className={`w-7 h-7 ${isMenuOpen ? 'hidden' : 'block'}`}
        fill="#000"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
);

export default MenuButton;
