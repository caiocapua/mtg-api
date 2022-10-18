import { inject, injectable } from 'tsyringe';
import { ICardsRepository } from '../domain/repositories/ICardsRepository';
import { Card } from '../infra/entities/Card';

@injectable()
export class FindCardByNameService {
    constructor(
        @inject('CardsRepository')
        private cardsRepository: ICardsRepository,
    ) {}

    async execute(name: string, playerId: string): Promise<Card[]> {
        const cards = await this.cardsRepository.findByName(name, playerId);

        return cards;
    }
}
