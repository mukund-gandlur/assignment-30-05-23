import express from 'express';
import dotenv from 'dotenv';

import * as bodyParser from 'body-parser';
import { appRouting } from './routing';


dotenv.config();

const app = express();
const port = process.env.PORT;


// use json form parser middlware
app.use(bodyParser.json());

// use query string parser middlware
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (_req, res) => {
  res.send('Express + TypeScript Server');
});

app.use('/api', appRouting());

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});