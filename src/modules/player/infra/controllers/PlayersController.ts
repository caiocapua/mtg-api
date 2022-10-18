import { FindPlayerByIdService } from '@modules/player/services/FindPlayerByIdService';
import { ListPlayersService } from '@modules/player/services/ListPlayersService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreatePlayerService } from '../../services/CreatePlayerService';

export class PlayersController {
    async create(request: Request, response: Response): Promise<Response> {
        const { name, email } = request.body;
        const createPlayerService = container.resolve(CreatePlayerService);

        const result = await createPlayerService.execute({ name, email });

        return response.json(result);
    }

    async findAll(request: Request, response: Response): Promise<Response> {
        const listPlayerService = container.resolve(ListPlayersService);

        const result = await listPlayerService.execute();

        return response.json(result);
    }

    async findById(request: Request, response: Response): Promise<Response> {
        const { playerId } = request.params;

        const findPlayerByIdService = container.resolve(FindPlayerByIdService);

        const result = await findPlayerByIdService.execute(playerId);

        return response.json(result);
    }
}
