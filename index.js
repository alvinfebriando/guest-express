import bodyparser from 'body-parser';
import express from 'express';
import {
  addGuestHandler,
  deleteGuestHandler,
  getAllGuestHandler,
  getGuestById,
  updateGuest,
} from './handler/guest.js';
import { helloHandler } from './handler/hello.js';
import { getNotes } from './handler/notes.js';

const app = express();
const port = 3000;

app.use(bodyparser.json());

app.get('/', helloHandler);

app.get('/guests', getAllGuestHandler);
app.get('/guests/:id', getGuestById);
app.put('/guests/:id', updateGuest);
app.post('/guests', addGuestHandler);
app.delete('/guests/:id', deleteGuestHandler);

app.get('/notes', getNotes);

app.listen(port, () => {
  console.log(`running on port: ${port}`);
});
