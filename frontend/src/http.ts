import axios from "axios";

export const getAllEvents = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/events");
    if (response.data.ok) {
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch events");
  }
};
