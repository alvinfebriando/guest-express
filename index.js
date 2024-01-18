import bodyparser from 'body-parser';
import express from 'express';
import {
  addGuestHandler,
  getAllGuestHandler,
  getGuestById,
  updateGuest,
  deleteGuestHandler,
} from './handler/guest.js';
import { helloHandler } from './handler/hello.js';

const app = express();
const port = 3000;

app.use(bodyparser.json());

app.get('/', helloHandler);

app.get('/guests', getAllGuestHandler);
app.get('/guests/:id', getGuestById);
app.put('/guests/:id', updateGuest);
app.post('/guests', addGuestHandler);
app.delete('/guests/:id', deleteGuestHandler);

app.listen(port, () => {
  console.log(`running on port: ${port}`);
});
