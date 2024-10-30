import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import logo from "../assets/images/logo.svg";
import avatar1 from "../assets/images/avatar1.jpg";
import { Link } from "react-router-dom";
import { Classic } from "@theme-toggles/react";
import "../contexts/Theme.css";

const Navbar = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className={`${theme} w-auto`}>
      <nav className="flex justify-between items-center p-4 gray-light-color-body  shadow-md">
        <div className="flex items-center gap-12">
          <div className="codelabs_logo">
            <Link to="/">
              <img src={logo} alt="logo" className="w-10 h-10" />
            </Link>
          </div>
          <ul className="navlist flex space-x-8 list-none items-center">
            <li>
              <Link className="no-underline text-grey" to="/challenges">
                Challenges
              </Link>
            </li>
            <li>
              <Link className="no-underline text-grey" to="/leaderboard">
                Leaderboard
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4 relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={toggleDropdown}
          >
            <img
              src={avatar1}
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            <p className="text-grey">John Smith</p>
          </div>

          {/* Dark Mode Toggle */}
          <div>
            <label className="flex items-center cursor-pointer">
              <Classic toggled={theme === "dark"} toggle={handleThemeToggle} />
              <input
                type="checkbox"
                className="sr-only"
                checked={theme === "dark"}
                onChange={handleThemeToggle}
              />
              <div className="w-10 h-6 bg-purple-300 dark:bg-gray-600 rounded-full p-1">
                <div
                  className={`h-4 w-4 bg-white dark:bg-black rounded-full shadow-md transform duration-300 ease-in-out ${
                    theme === "dark" ? "translate-x-5" : ""
                  }`}
                ></div>
              </div>
            </label>
          </div>

          {isDropdownOpen && (
            <div className="absolute right-0 top-10 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 z-20">
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Profile
              </Link>
              <Link
                to="/logout"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

