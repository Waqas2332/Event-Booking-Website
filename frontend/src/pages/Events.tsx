import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/Spinner";
import { getAllEvents } from "../http";
import EventsList from "../components/EventsList";
import { Event } from "../types";

const Events = () => {
  const { data, isLoading } = useQuery<Event[]>({
    queryKey: ["events"],
    queryFn: getAllEvents,
  });

  if (isLoading) {
    return <Spinner loading={isLoading} />;
  }

  return (
    <section className="py-6 pt-20 w-[90%] mx-auto flex">
      <div className="w-1/5">FILTERS</div>
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-black mb-6 text-start">
          Top Events
        </h2>
        {data && <EventsList events={data} />}
      </div>
    </section>
  );
};

export default Events;
