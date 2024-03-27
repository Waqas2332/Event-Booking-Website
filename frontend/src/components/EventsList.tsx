import { Event } from "../types";
import { motion } from "framer-motion";

type EventsListProp = {
  events: Event[];
};

const EventsList = ({ events }: EventsListProp) => {
  return (
    <div className="mt-12 flex flex-wrap container justify-center gap-10">
      {events.map((event) => (
        <div key={event._id} className="w-[300px] shadow-md mb-7 rounded-md">
          <div className="w-full h-1/2 overflow-hidden rounded-t-md">
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
