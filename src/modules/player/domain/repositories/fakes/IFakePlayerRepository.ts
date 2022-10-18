import { ICreatePlayer } from '@modules/player/domain/interfaces/ICreatePlayer';
import { Player } from '@modules/player/infra/entities/Player';

export interface IFakePlayerRepository {
    create(data: ICreatePlayer): Promise<Player>;
    findByEmail(email: string): Promise<Player | null>;
    findAllPlayers(): Promise<Player[]>;
    findById(id: string): Promise<Player | null>;
}
