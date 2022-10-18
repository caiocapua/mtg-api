import { inject, injectable } from 'tsyringe';
import { ICardsRepository } from '../domain/repositories/ICardsRepository';
import { Card } from '../infra/entities/Card';

@injectable()
export class ListCardsService {
    constructor(
        @inject('CardsRepository')
        private cardsRepository: ICardsRepository,
    ) {}

    async execute(playerId: string): Promise<Card[]> {
        const cards = await this.cardsRepository.listCards(playerId);

        return cards;
    }
}
