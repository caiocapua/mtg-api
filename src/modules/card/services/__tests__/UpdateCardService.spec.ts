import { FakePlayersRepository } from '@modules/player/domain/repositories/fakes/FakePlayerRepository';
import 'reflect-metadata';
import { CardLanguagesType } from '@modules/card/domain/interfaces/ICreateCard';
import { FakeCardsRepository } from '@modules/card/domain/repositories/fakes/FakeCardsRepository';
import { CreatePlayerService } from '@modules/player/services/CreatePlayerService';
import { AppError } from '@shared/errors/AppError';
import { CreateCardService } from '../CreateCardService';
import { UpdateCardService } from '../UpdateCardService';

describe('execute', () => {
    it('Should be able to create a new card', async () => {
        const fakeCardsRepository = new FakeCardsRepository();
        const fakePlayersRepository = new FakePlayersRepository();

        const createPlayerService = new CreatePlayerService(
            fakePlayersRepository,
        );

        const createCardService = new CreateCardService(
            fakeCardsRepository,
            fakePlayersRepository,
        );

        const updateCardService = new UpdateCardService(
            fakeCardsRepository,
            fakePlayersRepository,
        );

        const player = await createPlayerService.execute({
            name: 'Caio',
            email: 'caio@example.com',
        });

        const card = await createCardService.execute({
            playerId: player.id,
            name: 'magica',
            edition: '1',
            language: CardLanguagesType.PORTUGUES,
            foil: true,
            price: 13,
            quantity: 1,
        });

        const newCard = updateCardService.execute({
            cardId: card.id,
            playerId: player.id,
            price: 10,
            quantity: 100,
        });
        expect(card).toMatchObject(newCard);
    });

    it('should be able to return an exception when does not valid player', async () => {
        const fakeCardsRepository = new FakeCardsRepository();
        const fakePlayersRepository = new FakePlayersRepository();

        const updateCardService = new UpdateCardService(
            fakeCardsRepository,
            fakePlayersRepository,
        );

        expect(
            updateCardService.execute({
                cardId: '86980327-1779-453c-b289-d95495e744c3',
                playerId: '86980327-1779-453c-b289-d95495e744c3',
                price: 13,
                quantity: 1,
            }),
        ).rejects.toBeInstanceOf(AppError);
    });

    it('should be able to return an exception when player does not have this card', async () => {
        const fakeCardsRepository = new FakeCardsRepository();
        const fakePlayersRepository = new FakePlayersRepository();

        const createPlayerService = new CreatePlayerService(
            fakePlayersRepository,
        );

        const createCardService = new CreateCardService(
            fakeCardsRepository,
            fakePlayersRepository,
        );

        const player = await createPlayerService.execute({
            name: 'Caio',
            email: 'caio@example.com',
        });

        const card = await createCardService.execute({
            playerId: player.id,
            name: 'magica',
            edition: '1',
            language: CardLanguagesType.PORTUGUES,
            foil: true,
            price: 13,
            quantity: 1,
        });

        const updateCardService = new UpdateCardService(
            fakeCardsRepository,
            fakePlayersRepository,
        );

        expect(
            updateCardService.execute({
                cardId: card.id,
                playerId: '86980327-1779-453c-b289-d95495e744c3',
                price: 13,
                quantity: 1,
            }),
        ).rejects.toBeInstanceOf(AppError);
    });
});
