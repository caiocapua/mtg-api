import { ICreatePlayer } from '@modules/player/domain/interfaces/ICreatePlayer';
import { IPlayerRepository } from '@modules/player/domain/repositories/IPlayersRepository';
import { dataSource } from '@shared/infra/typeorm';
import { Repository } from 'typeorm';
import { Player } from '../entities/Player';
export class PlayersRepository implements IPlayerRepository {
    private ormRepository: Repository<Player>;

    constructor() {
        this.ormRepository = dataSource.getRepository(Player);
    }

    async create({ name, email }: ICreatePlayer): Promise<Player> {
        const player = this.ormRepository.create({
            name,
            email,
        });

        return this.ormRepository.save(player);
    }

    async findByEmail(email: string): Promise<Player | null> {
        return this.ormRepository.findOne({ where: { email } });
    }

    async findAllPlayers(): Promise<Player[]> {
        return this.ormRepository.find();
    }

    async findById(id: string): Promise<Player | null> {
        return this.ormRepository.findOne({ where: { id } });
    }
}
