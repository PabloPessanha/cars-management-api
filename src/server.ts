import express from 'express';
import cors from 'cors';
import categories from './routes/categories.routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(categories);

app.listen(3333);
