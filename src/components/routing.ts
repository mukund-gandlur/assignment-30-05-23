import { BaseRouting } from './../base-routing';
import { NextFunction, Request, Response } from 'express';

import { CinemaController } from './controller';

/**
 * @export
 * @class HelloRouting
 */
export class CinemaRouting extends BaseRouting {

  registerRouting(): void {
    let controller: CinemaController = new CinemaController();

    this.router.get('/cinema', (req: Request, res: Response, next: NextFunction) => {
      controller.getCinema(req, res, next);
    });

    this.router.post('/cinema', (req: Request, res: Response, next: NextFunction) => {
      controller.postCreateCinema(req, res, next);
    });
  }

}