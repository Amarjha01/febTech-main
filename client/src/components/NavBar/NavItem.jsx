import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, label, handleClose }) => (
  <li className="lg:mx-2 text-black my-2 lg:my-0 rounded-lg">
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "sm:text-lg lg:text-xl px-3 lg:px-4 py-2 block bg-[#1136ff] text-white rounded-lg"
          : "sm:text-lg lg:text-xl px-3 lg:px-4 py-2 block hover:bg-[#1136ff] hover:text-white rounded-lg"
      }
      onClick={handleClose}
    >
      {label}
    </NavLink>
  </li>
);

export default NavItem;
