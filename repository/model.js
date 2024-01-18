import { DataTypes } from 'sequelize';
import sequelize from './db.js';

export const Guest = sequelize.define('Guest', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  phoneNumber: {
    type: DataTypes.STRING,
  },
  notes: {
    type: DataTypes.STRING,
  },
});

Guest.sync({ force: true });
