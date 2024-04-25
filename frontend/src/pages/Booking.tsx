import LoginModal from "./LoginModal";
import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";

const Booking = () => {
  const { isAuthenticated, openModal, setOpenModal } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    setOpenModal(true);
    return <LoginModal location={location.pathname} isOpen={openModal} />;
  }

  return <div>Booking</div>;
};

export default Booking;
