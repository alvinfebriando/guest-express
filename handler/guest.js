export const addGuestHandler = (req, res) => {
  res.status(201).json({
    data: req.body,
  });
};
