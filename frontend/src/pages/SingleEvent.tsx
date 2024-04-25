import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleEvent } from "../http";
import Spinner from "../components/Spinner";
import { Event } from "../types";
import CustomGoogleMap from "../components/GoogleMap";
import BackButton from "../components/BackButton";
import { format } from "date-fns";
import { motion } from "framer-motion";

const SingleEvent = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery<Event>({
    queryKey: ["events", eventId],
    queryFn: () => getSingleEvent(eventId!),
  });

  if (isLoading) {
    return <Spinner loading={isLoading} />;
  }

  function onNavigate() {
    navigate(`/event/${eventId}/booking`);
  }

  return (
    data && (
      <div className="pt-12 w-[90%] mx-auto max-md:w-[98%] space-y-4">
        <BackButton />
        <div className="flex pt-12 pb-12 items-center">
          <div className="w-1/2 max-md:w-full">
            <p className="text-xl">
              <span>Category : </span>
              <span className="font-semibold italic">{data.category}</span>
            </p>
            <h1 className="mb-4 text-4xl font-semibold">{data.title}</h1>
            <p>
              <span className="">About: </span>
              <span className="italic ">
                {data.description} Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Dolor, sint, nulla distinctio quaerat quo
                facilis nobis ipsum nam sapiente repellendus nesciunt? Fugit
                consequuntur quae, aperiam soluta cupiditate iusto placeat ad?
              </span>
            </p>
            <p className="mt-4">
              <span className="">Venue: </span>
              <span className="italic font-semibold">{data.location}</span>
            </p>
            <p className="">
              <span className="">Held On: </span>
              <span className="italic font-semibold">
                {format(data.startTime, "MMMM do yyyy, h:mm:ss a")}
              </span>
            </p>
            <p className="">
              <span className="">Avaliable Capacity: </span>
              <span className="italic font-semibold">{data.capacity}</span>
            </p>
            <motion.button
              onClick={onNavigate}
              whileTap={{ scale: 0.98 }}
              className="btn-primary mt-4"
            >
              Book Now
            </motion.button>
          </div>
          <div className="w-1/2">
            {/* <CustomGoogleMap location={data.location} /> */}
          </div>
        </div>
      </div>
    )
  );
};

export default SingleEvent;
