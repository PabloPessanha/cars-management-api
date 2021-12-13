import { Request, Response } from 'express';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

export class CreateCategoryController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  async handle(req: Request, res: Response) {
    const { name, description } = req.body;

    const newSpecification = this.createSpecificationUseCase.execute({ name, description });
    return res.status(201).json(newSpecification);
  }
}
