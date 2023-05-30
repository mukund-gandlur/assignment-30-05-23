import { NextFunction, Request, Response } from 'express';
import { createCinema, fetchCinemas, purchaseCoupleTicket, purchaseSingleTicket } from './services';

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
  async postCreateCinema(req: Request, res: Response, _next: NextFunction): Promise<void> {
    res.status(200).send(await createCinema(req.body));
  }


  /**
   * Purchase Ticket
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   */
   async postPurchaseSingleTicket(req: Request, res: Response, _next: NextFunction): Promise<void> {
    res.status(200).send(await purchaseSingleTicket(req.body));
  }


  /**
   * Purchase Couple Ticket
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   */
   async postPurchaseCoupleTicket(req: Request, res: Response, _next: NextFunction): Promise<void> {
    res.status(200).send(await purchaseCoupleTicket(req.body));
  }
}