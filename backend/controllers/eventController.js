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

const getSingleEvent = async (req, res, next) => {
  const { id } = req.params;
  try {
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ message: "Event Not Found", ok: false });
    }
    res.status(200).json({ ok: true, data: event });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export { getAllEvents, getSingleEvent };
