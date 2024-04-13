import { FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      initial={{ scale: 1.0 }}
      whileHover={{ scale: 1.1 }}
      className="btn flex items-center gap-3"
      onClick={() => navigate("/")}
    >
      <FaArrowLeftLong />
      Go Back
    </motion.button>
  );
};

export default BackButton;
