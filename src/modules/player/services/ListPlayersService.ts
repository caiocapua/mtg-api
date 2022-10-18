import { inject, injectable } from 'tsyringe';
import { IPlayerRepository } from '../domain/repositories/IPlayersRepository';
import { Player } from '../infra/entities/Player';

@injectable()
export class ListPlayersService {
    constructor(
        @inject('PlayersRepository')
        private playersRepository: IPlayerRepository,
    ) {}

    async execute(): Promise<Player[]> {
        const players = await this.playersRepository.findAllPlayers();

        return players;
    }
}
