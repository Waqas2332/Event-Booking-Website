import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    function checkAuth() {
      if (!isAuthenticated) {
        navigate("/auth/signin");
      }
    }

    checkAuth();
  }, []);

  return <div>Booking</div>;
};

export default Booking;
