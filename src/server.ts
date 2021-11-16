import express from 'express';
import cors from 'cors';
import { categoriesRouter } from './modules/cars/routes/categories.routes';
import { specificationsRouter } from './modules/cars/routes/specifications.routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/categories', categoriesRouter);
app.use('/api/specifications', specificationsRouter);

app.listen(3333);
