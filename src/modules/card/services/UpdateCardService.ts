import { IPlayerRepository } from '@modules/player/domain/repositories/IPlayersRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IUpdateCard } from '../domain/interfaces/IUpdateCard';
import { ICardsRepository } from '../domain/repositories/ICardsRepository';
import { Card } from '../infra/entities/Card';

@injectable()
export class UpdateCardService {
    constructor(
        @inject('CardsRepository')
        private cardsRepository: ICardsRepository,
        @inject('PlayersRepository')
        private playersRepository: IPlayerRepository,
    ) {}

    async execute({
        cardId,
        playerId,
        price,
        quantity,
    }: IUpdateCard): Promise<Card | undefined> {
        const player = await this.playersRepository.findById(playerId);

        if (!player) throw new AppError('Invalid player', 400);

        const card = await this.cardsRepository.findById(cardId, playerId);

        if (!card) throw new AppError('Player does not have this card', 404);

        Object.assign(card, {
            price,
            quantity,
        });

        const newCard = await this.cardsRepository.update(card);

        return newCard;
    }
}
