import express from 'express';
import router from './routes/index';
import form from './routes/form';
import logger from './utils/logger';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

const app = express();
dotenv.config();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.urlencoded({ extended: false }));
connectToDb(process.env.CONN_STRING);

app.use('/', router);
app.use('/', form);
app.use(logger);

app.listen(3000);

async function connectToDb(connString?: string) {
  await mongoose
    .connect(connString || '')
    .then(res => console.log('Connnection successful!'))
    .catch(err => console.error(err));
}
