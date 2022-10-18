import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IPlayerRepository } from '../domain/repositories/IPlayersRepository';
import { Player } from '../infra/entities/Player';

@injectable()
export class FindPlayerByIdService {
    constructor(
        @inject('PlayersRepository')
        private playersRepository: IPlayerRepository,
    ) {}

    async execute(playerId: string): Promise<Player> {
        const player = await this.playersRepository.findById(playerId);

        if (!player) throw new AppError('Player not found', 404);

        return player;
    }
}
