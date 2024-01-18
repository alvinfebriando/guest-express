import { Guest } from '../repository/model.js';

export const getNotes = async (req, res) => {
  let notes = await Guest.findAll({
    attributes: ['name', 'notes'],
  });

  res.json({
    data: notes,
  });
};
