import { Player } from '@modules/player/infra/entities/Player';
import { v4 as uuidV4 } from 'uuid';
import { ICreatePlayer } from '../../interfaces/ICreatePlayer';
import { IFakePlayerRepository } from './IFakePlayerRepository';

export class FakePlayersRepository implements IFakePlayerRepository {
    private players: Player[] = [];

    async create({ name, email }: ICreatePlayer): Promise<Player> {
        const player = new Player();

        Object.assign(player, {
            id: uuidV4(),
            name,
            email,
        });

        this.players.push(player);

        return player;
    }

    async findByEmail(email: string): Promise<Player | null> {
        const player = this.players.find(player => player.email === email);

        return player ? player : null;
    }

    async findAllPlayers(): Promise<Player[]> {
        return this.players;
    }

    async findById(id: string): Promise<Player | null> {
        const player = this.players.find(player => player.id === id);

        return player ? player : null;
    }
}
