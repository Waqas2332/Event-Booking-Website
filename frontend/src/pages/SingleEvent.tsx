import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSingleEvent } from "../http";
import Spinner from "../components/Spinner";
import { Event } from "../types";

const SingleEvent = () => {
  const { eventId } = useParams();
  const { data, isLoading } = useQuery<Event>({
    queryKey: ["events", eventId],
    queryFn: () => getSingleEvent(eventId!),
  });

  if (isLoading) {
    return <Spinner loading={isLoading} />;
  }

  return <div>{data?.title}</div>;
};

export default SingleEvent;
