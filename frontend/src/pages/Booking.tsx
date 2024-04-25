import LoginModal from "./LoginModal";
import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";

const Booking = () => {
  const { isAuthenticated, openSigninModal, onOpenSigninModal } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    onOpenSigninModal();
    return <LoginModal location={location.pathname} isOpen={openSigninModal} />;
  }

  return <div>Booking</div>;
};

export default Booking;
