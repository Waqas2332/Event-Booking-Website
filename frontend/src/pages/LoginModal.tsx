import { Dialog } from "@headlessui/react";
import { useAuth } from "../context/AuthContext";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

type LoginModalProps = {
  isOpen: boolean;
  location?: string;
};

const LoginModal = ({ isOpen, location }: LoginModalProps) => {
  const { setOpenModal, isAuthenticated } = useAuth();
  const currLocation = useLocation();

  function checkAuthentication() {
    if (currLocation.pathname === location && !isAuthenticated) {
      toast.error("Please Sign in for booking");
    }
  }

  return (
    <Dialog open={isOpen} onClose={() => setOpenModal(false)}>
      <Dialog.Overlay
        onClick={checkAuthentication}
        className="fixed inset-0 bg-black opacity-30"
      />
      <div className=" rounded-md  fixed top-[20%] left-[50%] transform  -translate-x-1/2 w-1/3 py-8 px-6 max-md:w-[75%] max-lg:w-1/2 bg-white z-10">
        <h2 className="text-2xl font-semibold font-headings">Login</h2>
        <form className="mt-4">
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <button className="btn-primary mt-4 w-full">Login</button>
          <div className="text-center mt-4">
            <Link to="/auth/register" className="text-sm">
              Don't have an account?{" "}
              <span className="italic text-primary underline">Signup Now</span>
            </Link>
          </div>
        </form>
      </div>
    </Dialog>
  );
};

export default LoginModal;
