import { Card } from '@modules/card/infra/entities/Card';
import { ICreateCard } from '../interfaces/ICreateCard';

export interface ICardsRepository {
    create(data: ICreateCard): Promise<Card>;
    findByName(name: string, playerId: string): Promise<Card[]>;
    listCards(playerId: string): Promise<Card[]>;
    findById(id: string, playerId: string): Promise<Card | undefined>;
    delete(id: string): Promise<void>;
    update(data: Card): Promise<Card | undefined>;
}
