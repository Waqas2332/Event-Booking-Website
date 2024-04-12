import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSingleEvent } from "../http";
import Spinner from "../components/Spinner";
import { Event } from "../types";
import CustomGoogleMap from "../components/GoogleMap";

const SingleEvent = () => {
  const { eventId } = useParams();
  const { data, isLoading } = useQuery<Event>({
    queryKey: ["events", eventId],
    queryFn: () => getSingleEvent(eventId!),
  });

  if (isLoading) {
    return <Spinner loading={isLoading} />;
  }

  return (
    data && (
      <div>
        <CustomGoogleMap location={data.location} />
      </div>
    )
  );
};

export default SingleEvent;
