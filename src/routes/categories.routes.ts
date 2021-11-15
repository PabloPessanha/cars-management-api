import { Router, Request, Response } from 'express';

const categoriesRoute = Router();

const categories = [];

categoriesRoute.post('/categories', (req: Request, res: Response) => {
  const { name, description } = req.body;
  const newCategory = { name, description };

  categories.push(newCategory);
  return res.status(201).json(newCategory);
});
