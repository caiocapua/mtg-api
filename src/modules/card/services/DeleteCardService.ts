import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICardsRepository } from '../domain/repositories/ICardsRepository';

@injectable()
export class DeleteCardService {
    constructor(
        @inject('CardsRepository')
        private cardsRepository: ICardsRepository,
    ) {}

    async execute(cardId: string, playerId: string): Promise<void> {
        const card = await this.cardsRepository.findById(cardId, playerId);

        if (!card) throw new AppError('Player does not have this card', 404);

        await this.cardsRepository.delete(cardId);
    }
}
