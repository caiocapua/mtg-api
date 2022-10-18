import { IPlayerRepository } from '@modules/player/domain/repositories/IPlayersRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import {
    CardLanguagesType,
    ICreateCard,
} from '../domain/interfaces/ICreateCard';
import { ICardsRepository } from '../domain/repositories/ICardsRepository';
import { Card } from '../infra/entities/Card';

@injectable()
export class CreateCardService {
    constructor(
        @inject('CardsRepository')
        private cardsRepository: ICardsRepository,
        @inject('PlayersRepository')
        private playersRepository: IPlayerRepository,
    ) {}

    async execute({
        playerId,
        name,
        edition,
        foil,
        language,
        price,
        quantity,
    }: ICreateCard): Promise<Card> {
        const user = await this.playersRepository.findById(playerId);

        if (!user) throw new AppError('Invalid player', 400);

        if (!Object.values(CardLanguagesType).includes(language)) {
            throw new AppError(
                'Language must be English, Portuguese or Japanese',
                400,
            );
        }

        const card = await this.cardsRepository.create({
            playerId,
            name,
            edition,
            foil,
            language,
            price,
            quantity,
        });

        return card;
    }
}
