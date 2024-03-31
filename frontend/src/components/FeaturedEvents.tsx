import { useEffect, useState } from "react";
import EventsList from "./EventsList";
import axios from "axios";
import { type Event } from "../types";
import Spinner from "./Spinner";

const FeaturedEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/events");
        if (response.data.ok) {
          setEvents(response.data.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getAllEvents();
  }, []);

  if (isLoading) {
    return <Spinner loading={isLoading} />;
  }

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
