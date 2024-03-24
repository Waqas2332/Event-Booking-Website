import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex w-full h-[88vh] hero">
      <div className="w-[90%] mx-auto">
        <div className="w-full h-full flex-col gap-2 flex justify-center items-center">
          <h2 className="font-headings text-4xl font-semibold">
            Discover Your Next Adventure
          </h2>
          <p className="text-2xl">
            Explore countless events and find the perfect one to ignite your
            passion
          </p>
          <motion.button
            className="btn mt-4"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            Explore Events
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
