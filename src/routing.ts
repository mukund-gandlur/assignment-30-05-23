import {  Router } from 'express';
import * as express from 'express';
import { CinemaRouting } from 'components/routing';


export function appRouting(): Router {
  let router: Router;
  router = express.Router();


  let helloRouting: CinemaRouting = new CinemaRouting(router);
  helloRouting.registerRouting();


  // REGISTER ROUTING OF COMPONENTS HERE END ------------------------------------

  return router;
}