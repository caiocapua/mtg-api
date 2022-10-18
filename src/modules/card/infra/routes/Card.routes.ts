import { Router } from 'express';
import { CardsController } from '../controllers/CardsController';

const cardRouter = Router();
const cardsController = new CardsController();

cardRouter.post('', cardsController.create);
cardRouter.get('/:name/:playerId', cardsController.findCardByName);
cardRouter.get('/:playerId', cardsController.listCards);
cardRouter.delete('/:cardId/:playerId', cardsController.delete);
cardRouter.put('/:cardId/:playerId', cardsController.update);

export { cardRouter };
