import { Request, Response } from 'express';
import { ListCategoryUseCase } from './ListCategoryUseCase';

export class ListCategoryController {
  constructor(private listCategoriesUseCase: ListCategoryUseCase) {}

  handle(req: Request, res: Response) {
    const allCategories = this.listCategoriesUseCase.execute();

    return res.status(200).json(allCategories);
  }
}
