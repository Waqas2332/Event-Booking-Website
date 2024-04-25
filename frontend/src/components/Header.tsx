import { Link, NavLink } from "react-router-dom";
import BackDrop from "./BackDrop";
import { useState } from "react";
import SideDrawer from "./SideDrawer";
import { IoMenu } from "react-icons/io5";
import { AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const [isMobileNav, setIsMobileNav] = useState(false);
  const { isAuthenticated } = useAuth();

  const openDrawer = () => {
    setIsMobileNav(true);
  };

  const closeDrawer = () => {
    setIsMobileNav(false);
  };

  return (
    <header className="bg-primary text-white flex py-4 items-center fixed top-0 w-full z-10">
      <div className="w-[90%]  mx-auto flex justify-between items-center">
        <h2 className="font-headings text-2xl cursor-pointer text-secondary">
          <Link to="/">EventFul</Link>
        </h2>
        <div className="max-md:hidden">
          <ul className="flex gap-6 nav max-lg:text-sm max">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active" : "nav-links"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  isActive ? "active" : "nav-links"
                }
              >
                Explore Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/create-event"
                className={({ isActive }) =>
                  isActive ? "active" : "nav-links"
                }
              >
                Create Event
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-events"
                className={({ isActive }) =>
                  isActive ? "active" : "nav-links"
                }
              >
                My Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "active" : "nav-links"
                }
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 max-md:hidden">
          <button className="btn">
            {isAuthenticated ? "Sign out" : "Sign in"}
          </button>
        </div>
        <div className="hidden max-md:block">
          <IoMenu
            size={28}
            className="text-secondary cursor-pointer"
            onClick={openDrawer}
          />
        </div>
      </div>
      <AnimatePresence>
        {isMobileNav && (
          <>
            <BackDrop onClose={closeDrawer} />
            <SideDrawer />
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
