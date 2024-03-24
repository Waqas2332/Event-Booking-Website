import { EventCategory } from "../data/categories";

export type Event = {
  id: number;
  title: string;
  description: string;
  date: Date;
  location: string;
  capacity: number;
  category: EventCategory;
  imageUrl: string;
  user: {
    id: number;
  };
  attendees: [string];
};
