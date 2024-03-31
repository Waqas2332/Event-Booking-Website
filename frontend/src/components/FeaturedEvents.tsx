import { events } from "../data/events";
import EventsList from "./EventsList";

const FeaturedEvents = () => {
  return (
    <section className=" py-6 pt-20 w-[90%] mx-auto">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">
          Featured Events
        </h2>
        <EventsList events={events} />
      </div>
    </section>
  );
};

export default FeaturedEvents;
