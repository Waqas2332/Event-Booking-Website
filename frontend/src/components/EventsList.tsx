import { useNavigate } from "react-router-dom";
import { Event } from "../types";
import { motion } from "framer-motion";

type EventsListProp = {
  events: Event[];
};

const EventsList = ({ events }: EventsListProp) => {
  const naviagte = useNavigate();

  const navigateToSingleEvent = (id: string) => {
    naviagte(`/event/${id}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <div key={event._id} className="rounded-xl shadow-md relative">
          <div className="w-full h-1/2 overflow-hidden rounded-t-md">
            <motion.img
              src={event.imageUrl}
              alt={event.title}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => navigateToSingleEvent(event._id)}
              className="w-full h-full object-cover object-center rounded-t-md cursor-pointer"
            />
          </div>
          <div className="w-full pt-4 ps-4">
            <p className="text-sm">
              Category: <span className="italic">{event.category}</span>
            </p>
            <div className="flex w-full justify-between items-center">
              <div className="w-3/4">
                <h2 className="truncate font-semibold text-xl">
                  {event.title.substring(0, 25)}
                </h2>

                <p className="italic text-sm relative -top-1 flex justify-between">
                  Held on {event.date}{" "}
                </p>
              </div>
              <div>
                <span className="mr-6 font-bold text-base">$20</span>
              </div>
            </div>
            <p className="mt-3">Available Seats : {event.capacity}</p>
            <button
              onClick={() => navigateToSingleEvent(event._id)}
              className="btn-primary relative mt-3"
            >
              Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsList;
