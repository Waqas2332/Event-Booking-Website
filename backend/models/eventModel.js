import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  date: {
    type: String,
    required: [true, "Date is required"],
  },
  startTime: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  location: {
    type: String,
    required: [true, "Location is required"],
  },
  capacity: {
    type: Number,
    required: [true, "Capacity is required"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  attendees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  category: {
    type: String,
    enum: [
      "Arts & Culture",
      ,
      "Business & Professional",
      "Classes & Workshops",
      "Food & Drink",
      "Games & Entertainment",
      "Health & Wellness",
      "Hobbies & Interests",
      "Music & Entertainment",
      "Networking & Social",
      "Science & Technology",
      "Sports & Fitness",
      "Travel & Outdoors",
    ],
    required: [true, "Category must be from the defined ones"],
  },
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
