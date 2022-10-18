import { DeleteCardService } from '@modules/card/services/DeleteCardService';
import { FindCardByNameService } from '@modules/card/services/FindCardByNameService';
import { ListCardsService } from '@modules/card/services/ListCardsService';
import { UpdateCardService } from '@modules/card/services/UpdateCardService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCardService } from '../../services/CreateCardService';

export class CardsController {
    async create(request: Request, response: Response): Promise<Response> {
        const { playerId, name, edition, foil, language, price, quantity } =
            request.body;
        const createCardService = container.resolve(CreateCardService);

        const result = await createCardService.execute({
            playerId,
            name,
            edition,
            foil,
            language,
            price,
            quantity,
        });

        return response.json(result);
    }

    async findCardByName(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { name, playerId } = request.params;

        const findCardByNameService = container.resolve(FindCardByNameService);

        const result = await findCardByNameService.execute(name, playerId);

        return response.json(result);
    }

    async listCards(request: Request, response: Response): Promise<Response> {
        const { playerId } = request.params;

        const listCardsService = container.resolve(ListCardsService);

        const result = await listCardsService.execute(playerId);

        return response.json(result);
    }

    async delete(request: Request, response: Response): Promise<Response> {
        const { cardId, playerId } = request.params;

        const deleteCardService = container.resolve(DeleteCardService);

        await deleteCardService.execute(cardId, playerId);

        return response.json([]);
    }

    async update(request: Request, response: Response): Promise<Response> {
        const { playerId, cardId } = request.params;
        const { price, quantity } = request.body;

        const updateCardService = container.resolve(UpdateCardService);

        const result = await updateCardService.execute({
            playerId,
            cardId,
            price,
            quantity,
        });

        return response.json(result);
    }
}
