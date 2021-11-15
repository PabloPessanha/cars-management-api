import { Router, Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

const categoriesRoute = Router();

const categories = [];

categoriesRoute.get('/categories', (req: Request, res: Response) => {
  return res.status(200).json(categories);
});

categoriesRoute.post('/categories', (req: Request, res: Response) => {
  const { name, description } = req.body;
  const newCategory = { id: uuid(), name, description };

  categories.push(newCategory);
  return res.status(201).json(newCategory);
});

export default categoriesRoute;
