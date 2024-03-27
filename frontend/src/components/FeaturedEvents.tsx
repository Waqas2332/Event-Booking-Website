import { events } from "../data/events";
import EventsList from "./EventsList";

const FeaturedEvents = () => {
  return (
    <section className="text-black w-[90%] mx-auto mt-20">
      <h2 className="text-center font-headings text-3xl font-semibold">
        Featured Events
      </h2>
      <EventsList events={events} />
    </section>
  );
};

export default FeaturedEvents;
