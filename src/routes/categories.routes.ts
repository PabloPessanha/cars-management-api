import { Router, Request, Response } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoute = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoute.get('/categories', (req: Request, res: Response) => {
  const allCategories = categoriesRepository.list();
  return res.status(200).json(allCategories);
});

categoriesRoute.post('/categories', (req: Request, res: Response) => {
  const { name, description } = req.body;
  const checkCategoryExists = categoriesRepository.findByName(name);

  if (checkCategoryExists) {
    return res.status(400).json({ error: 'Category alread registered!' });
  }

  const newCategory = categoriesRepository.create({ name, description });

  return res.status(201).json(newCategory);
});

export default categoriesRoute;
