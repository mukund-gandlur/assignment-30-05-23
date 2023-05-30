import {  Router } from 'express';
import * as express from 'express';
import { CinemaRouting } from './components/routing';


export function appRouting(): Router {
  let router: Router;
  router = express.Router();


  let cinemaRouting: CinemaRouting = new CinemaRouting(router);
  cinemaRouting.registerRouting();

  return router;
}