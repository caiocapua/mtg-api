import { Router } from 'express';
import { PlayersController } from '../controllers/PlayersController';

const playerRouter = Router();
const playersController = new PlayersController();

playerRouter.post('', playersController.create);
playerRouter.get('', playersController.findAll);
playerRouter.get('/:playerId', playersController.findById);

export { playerRouter };
