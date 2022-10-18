import { Player } from '@modules/player/infra/entities/Player';
import { ICreatePlayer } from '../interfaces/ICreatePlayer';

export interface IPlayerRepository {
    create(data: ICreatePlayer): Promise<Player>;
    findByEmail(email: string): Promise<Player | null>;
    findAllPlayers(): Promise<Player[]>;
    findById(id: string): Promise<Player | null>;
}
