import 'reflect-metadata';
import { FakePlayersRepository } from '@modules/player/domain/repositories/fakes/FakePlayerRepository';
import { CreatePlayerService } from '../CreatePlayerService';
import { AppError } from '@shared/errors/AppError';
import { FindPlayerByIdService } from '../FindPlayerByIdService';

describe('execute', () => {
    it('Should be able to a player', async () => {
        const fakePlayersRepository = new FakePlayersRepository();

        const createPlayerService = new CreatePlayerService(
            fakePlayersRepository,
        );

        const findPlayerByIdService = new FindPlayerByIdService(
            fakePlayersRepository,
        );

        const player = await createPlayerService.execute({
            name: 'Caio',
            email: 'caio@example.com',
        });

        const result = await findPlayerByIdService.execute(player.id);

        expect(result).toMatchObject(player);
    });

    it('should be able to return an exception when does not to find a player', async () => {
        const fakePlayersRepository = new FakePlayersRepository();

        const findPlayerByIdService = new FindPlayerByIdService(
            fakePlayersRepository,
        );

        expect(
            findPlayerByIdService.execute(
                '86980327-1779-453c-b289-d95495e744c3',
            ),
        ).rejects.toBeInstanceOf(AppError);
    });
});
