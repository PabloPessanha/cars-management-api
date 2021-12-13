import { Request, Response } from 'express';
import { ListSpecificationUseCase } from './ListSpecificationUseCase';

export class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

  async handle(req: Request, res: Response) {
    const allSpecifications = this.listSpecificationUseCase.execute();
    return res.status(200).json(allSpecifications);
  }
}
