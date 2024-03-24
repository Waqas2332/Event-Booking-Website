import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SideDrawer = () => {
  return (
    <motion.div
      key="side-drawer"
      className="fixed flex justify-between top-0  left-0 h-full w-[300px] bg-primary z-20"
      initial={{ x: "-300%" }}
      animate={{ x: 0 }}
      exit={{ x: "-300%" }}
      transition={{
        duration: 0.5,
        type: "spring",
      }}
      style={{ opacity: 1 }}
    >
      <div className="text-black mt-4 ms-8 w-full flex flex-col  h-[95%]">
        <div className="w-full">
          <h2 className="text-3xl text-secondary font-headings">
            <Link to="/">EventFul</Link>
          </h2>
        </div>
        <div>
          <ul className="space-y-4 mt-8 gap-6 nav text-accent">
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
        <div className="space-y-4 flex flex-col mt-4 w-[85%]">
          <button className="btn w-full">Sign in</button>
          <button className="btn-outline">Sign Up</button>
        </div>
      </div>
    </motion.div>
  );
};

export default SideDrawer;
