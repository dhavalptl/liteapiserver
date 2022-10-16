import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import noteRoutes from './routes/noteRoute.mjs';
import { errorHandler } from './middlewares/errorHandler.mjs';

const app = express();

app.use(compression());
app.use(helmet());
app.use('/', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));

app.use('/api/notes', noteRoutes);

//Global Error handling
app.use(errorHandler);

export default app;