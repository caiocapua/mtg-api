import { ICreateCard } from '@modules/card/domain/interfaces/ICreateCard';
import { ICardsRepository } from '@modules/card/domain/repositories/ICardsRepository';
import { dataSource } from '@shared/infra/typeorm';
import { Repository } from 'typeorm';
import { Card } from '../entities/Card';

export class CardsRepository implements ICardsRepository {
    private ormRepository: Repository<Card>;

    constructor() {
        this.ormRepository = dataSource.getRepository(Card);
    }

    async create({
        playerId,
        name,
        edition,
        foil,
        language,
        price,
        quantity,
    }: ICreateCard): Promise<Card> {
        const card = this.ormRepository.create({
            playerId,
            name,
            edition,
            foil,
            language,
            price,
            quantity,
        });
        return this.ormRepository.save(card);
    }

    async findByName(name: string, playerId: string): Promise<Card[]> {
        const cards = await this.ormRepository
            .createQueryBuilder('card')
            .where({ name })
            .andWhere({ playerId })
            .orderBy('card.price', 'DESC')
            .getMany();

        return cards;
    }

    async listCards(playerId: string): Promise<Card[]> {
        const cards = await this.ormRepository
            .createQueryBuilder('card')
            .where({ playerId })
            .orderBy('card.price', 'DESC')
            .getMany();

        return cards;
    }

    async findById(id: string, playerId: string): Promise<Card | undefined> {
        const card = await this.ormRepository
            .createQueryBuilder('card')
            .where({ id })
            .andWhere({ playerId })
            .getOne();

        return card ? card : undefined;
    }

    async delete(id: string): Promise<void> {
        await this.ormRepository.softDelete(id);
    }

    async update(card: Card): Promise<Card> {
        return this.ormRepository.save(card);
    }
}
