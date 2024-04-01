import EventsList from "./EventsList";
import { motion } from "framer-motion";
import { type Event } from "../types";
import Spinner from "./Spinner";
import { useQuery } from "@tanstack/react-query";
import { getAllEvents } from "../http";
import { useNavigate } from "react-router-dom";

const FeaturedEvents = () => {
  const navigate = useNavigate();

  const { data, isPending } = useQuery<Event[]>({
    queryKey: ["events"],
    queryFn: getAllEvents,
    staleTime: 5000,
  });

  if (isPending) {
    return <Spinner loading={isPending} />;
  }

  return (
    <section className=" py-6 pt-20 w-[90%] mx-auto">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">
          Featured Events
        </h2>
        {data && <EventsList events={data?.splice(0, 3)} />}
      </div>
      <div className="flex justify-center items-center mt-12">
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="btn-primary w-40"
          onClick={() => navigate("/events")}
        >
          Browse More
        </motion.button>
      </div>
    </section>
  );
};

export default FeaturedEvents;
