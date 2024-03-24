import { motion } from "framer-motion";

type BackDropProps = {
  onClose: () => void;
};

const BackDrop = ({ onClose }: BackDropProps) => {
  return (
    <motion.div
      className="fixed top-0 left-0 h-full w-full opacity-50 bg-black z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      exit={{ opacity: 0 }}
      key="backdrop"
      transition={{ duration: 0.3 }}
      onClick={onClose}
    />
  );
};

export default BackDrop;
