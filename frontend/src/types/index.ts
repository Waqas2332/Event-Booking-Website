import { EventCategory } from "../data/categories";

export type Event = {
  _id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  location: string;
  capacity: number;
  category: EventCategory;
  imageUrl: string;
  user: string;
  attendees: string[];
};

export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
