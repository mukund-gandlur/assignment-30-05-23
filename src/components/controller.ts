import { NextFunction, Request, Response } from 'express';
import { createCinema, fetchCinemas } from './services';

/**
 * @export
 * @class HelloController
 */
export class CinemaController {

  /**
   * Get all Cinemas
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   */
  async getCinema(_req: Request, res: Response, _next: NextFunction): Promise<void> {
    res.status(200).send(JSON.stringify(await fetchCinemas()));
  }

  /**
   * Create Cinema
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   */
  postCreateCinema(req: Request, res: Response, _next: NextFunction): void {
    res.status(200).send(createCinema(req.body));
  }

}