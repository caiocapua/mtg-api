import { cardRouter } from '@modules/card/infra/routes/Card.routes';
import { playerRouter } from '@modules/player/infra/routes/Player.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/player', playerRouter);
routes.use('/card', cardRouter);

export default routes;
