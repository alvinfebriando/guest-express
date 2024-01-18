import bodyparser from 'body-parser';
import express from 'express';
import { addGuestHandler } from './handler/guest.js';
import { helloHandler } from './handler/hello.js';

const app = express();
const port = 3000;

app.use(bodyparser.json());

app.get('/', helloHandler);
app.post('/guests', addGuestHandler);

app.listen(port, () => {
  console.log(`running on port: ${port}`);
});
