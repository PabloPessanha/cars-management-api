import { Request, Response } from 'express';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(req: Request, res: Response) {
    const { name, description } = req.body;

    const newCategory = this.createCategoryUseCase.execute({ name, description });
    return res.status(201).json(newCategory);
  }
}
