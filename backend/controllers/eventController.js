import Event from "../models/eventModel.js";

const getAllEvents = async (req, res, next) => {
  try {
    const events = await Event.find({});
    res.status(200).json({ ok: true, data: events });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export { getAllEvents };
