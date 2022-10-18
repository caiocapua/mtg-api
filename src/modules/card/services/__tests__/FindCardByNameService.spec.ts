import { CardLanguagesType } from '@modules/card/domain/interfaces/ICreateCard';
import { FakeCardsRepository } from '@modules/card/domain/repositories/fakes/FakeCardsRepository';
import { FakePlayersRepository } from '@modules/player/domain/repositories/fakes/FakePlayerRepository';
import { CreatePlayerService } from '@modules/player/services/CreatePlayerService';
import 'reflect-metadata';
import { CreateCardService } from '../CreateCardService';
import { FindCardByNameService } from '../FindCardByNameService';

describe('execute', () => {
    it('Should be able to return a card by name', async () => {
        const fakeCardsRepository = new FakeCardsRepository();
        const fakePlayersRepository = new FakePlayersRepository();

        const createPlayerService = new CreatePlayerService(
            fakePlayersRepository,
        );
        const findCardByNameService = new FindCardByNameService(
            fakeCardsRepository,
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

        const result = await findCardByNameService.execute(
            card.name,
            player.id,
        );

        expect(result).toEqual([card]);
    });

    it('should be able to return an empty cards list', async () => {
        const fakeCardsRepository = new FakeCardsRepository();
        const fakePlayersRepository = new FakePlayersRepository();
        const findCardByNameService = new FindCardByNameService(
            fakeCardsRepository,
        );
        const createPlayerService = new CreatePlayerService(
            fakePlayersRepository,
        );

        const player = await createPlayerService.execute({
            name: 'Caio',
            email: 'caio@example.com',
        });

        const result = await findCardByNameService.execute(
            'example',
            player.id,
        );

        expect(result).toEqual([]);
    });
});
