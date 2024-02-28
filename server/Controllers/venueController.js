import VenueSchema from "../models/VenueSchema.js";

export const displayVenues = async (req, res) => {
  try {
    const {location,VenueType,rentalCost} = req.body;
    const query = {};
    if (location) query.location = location;
    if (VenueType) query.VenueType = VenueType;
    if (rentalCost)
      query.rentalCost = { $lte: parseInt(rentalCost) };    
    const venues =  await VenueSchema.find(query);
    res.json(venues);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addVenue = async (req, res) => {
  try {
    const newData = new VenueSchema(req.body);
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
};
