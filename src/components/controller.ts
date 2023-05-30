import { NextFunction, Request, Response } from 'express';

/**
 * @export
 * @class HelloController
 */
export class CinemaController {

  /**
   * Demo Action
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   */
  getCinema(_req: Request, res: Response, _next: NextFunction): void {
    res.status(200).send({ say: 'Hello Demo Action.' });
  }

  /**
   * Demo Action
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   */
  postCreateCinema(req: Request, res: Response, _next: NextFunction): void {
    res.status(200).send(req.body);
  }

}