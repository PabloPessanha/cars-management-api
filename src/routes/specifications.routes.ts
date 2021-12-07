import { Router, Request, Response } from 'express';
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRouter = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRouter.get('/', (req: Request, res: Response) => {
  const allCategories = specificationsRepository.list();
  return res.status(200).json(allCategories);
});

specificationsRouter.post('/', (req: Request, res: Response) => {
  const { name, description } = req.body;
  const specificationService = new CreateSpecificationService(specificationsRepository);

  const newCategory = specificationService.execute({ name, description });
  return res.status(201).json(newCategory);
});

export { specificationsRouter };
