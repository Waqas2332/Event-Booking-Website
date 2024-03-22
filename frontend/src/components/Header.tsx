import { Link } from "react-router-dom";
import BackDrop from "./BackDrop";
import { useState } from "react";
import SideDrawer from "./SideDrawer";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [isMobileNav, setIsMobileNav] = useState(false);

  const openDrawer = () => {
    setIsMobileNav(true);
  };

  const closeDrawer = () => {
    setIsMobileNav(false);
  };

  return (
    <header className="bg-primary flex py-4 items-center fixed top-0 w-full z-10">
      <div className="w-[90%]  mx-auto flex justify-between items-center">
        <h2 className="font-headings text-2xl cursor-pointer text-secondary">
          <Link to="/">EventFul</Link>
        </h2>
        <div className="max-md:hidden">
          <ul className="flex gap-6 nav max-lg:text-sm max">
            <li>
              <Link to="/">Explore Events</Link>
            </li>
            <li>
              <Link to="/">Create Event</Link>
            </li>
            <li>
              <Link to="/">My Events</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 max-md:hidden">
          <button className="btn">Sign in</button>
          <button className="btn-outline">Sign Up</button>
        </div>
        <div className="hidden max-md:block">
          <IoMenu
            size={28}
            className="text-secondary cursor-pointer"
            onClick={openDrawer}
          />
        </div>
      </div>
      {isMobileNav && (
        <>
          <BackDrop onClose={closeDrawer} />
          <SideDrawer />
        </>
      )}
    </header>
  );
};

export default Header;
