import express from 'express';
import router from './routes/index';
import form from './routes/form';
import logger from './utils/logger';

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.urlencoded({ extended: false }));

app.use('/', router);
app.use('/', form);
app.use(logger);

app.listen(3000);
