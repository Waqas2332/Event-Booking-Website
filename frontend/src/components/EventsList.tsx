import { Event } from "../types";
import { motion } from "framer-motion";

type EventsListProp = {
  events: Event[];
};

const EventsList = ({ events }: EventsListProp) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {events.map((event) => (
        <div key={event._id} className="rounded-xl shadow-md relative">
          <div className="w-full h-3/5 overflow-hidden rounded-t-md">
            <motion.img
              src={event.imageUrl}
              alt={event.title}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="w-full h-full object-cover object-center rounded-t-md cursor-pointer"
            />
          </div>
          <div className="w-full pt-4 ps-4">
            <h2 className="w-3/4 truncate font-semibold text-xl">
              {event.title.substring(0, 25)}
            </h2>
            <small className="italic relative -top-2">
              Held on {event.date.toDateString()}
            </small>
            <p>Available Seats : {event.capacity}</p>
            <button className="btn-primary mt-3">Book Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsList;
