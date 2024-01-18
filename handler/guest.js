import { Guest } from '../repository/model.js';

export const getAllGuestHandler = async (req, res) => {
  let guests = await Guest.findAll();
  res.status(200).json({
    data: guests,
  });
};

export const getGuestById = async (req, res) => {
  let guest = await Guest.findByPk(req.params.id);
  if (!guest) {
    res.status(404);
    res.json({
      error: 'guest not found',
    });
    return;
  }

  res.json({
    data: guest,
  });
};

export const addGuestHandler = async (req, res) => {
  try {
    await Guest.create({
      name: req.body.name,
      address: req.body.address,
      phoneNumber: req.body.phone_number,
      notes: req.body.notes,
    });
  } catch (err) {
    res.status(500);
    res.json({
      error: err,
    });
  }

  res.status(201);
  res.json({
    message: 'saved',
  });
};

export const updateGuest = async (req, res) => {
  let guest = await Guest.findByPk(req.params.id);
  if (!guest) {
    res.status(400);
    res.json({
      message: 'guest not found',
    });
  }

  guest.name = req.body.name;
  guest.address = req.body.address;
  guest.phoneNumber = req.body.phone_number;
  guest.notes = req.body.notes;

  await guest.save();

  res.json({
    message: 'updated',
  });
};

export const deleteGuestHandler = async (req, res) => {
  await Guest.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({
    message: 'deleted',
  });
};
