import Contact from "../models/Contact.js";

export const sendMessage = async (req, res) => {
  await Contact.create(req.body);
  res.json({ success: true });
};
