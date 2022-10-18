import 'reflect-metadata';
import { FakePlayersRepository } from '@modules/player/domain/repositories/fakes/FakePlayerRepository';
import { CreatePlayerService } from '../CreatePlayerService';
import { AppError } from '@shared/errors/AppError';

describe('execute', () => {
    it('Should be able to create a new player', async () => {
        const fakePlayersRepository = new FakePlayersRepository();

        const createPlayerService = new CreatePlayerService(
            fakePlayersRepository,
        );

        const player = await createPlayerService.execute({
            name: 'Caio',
            email: 'caio@example.com',
        });

        expect(player).toHaveProperty('id');
    });

    it('should be able to return an exception when exist an email', async () => {
        const fakePlayersRepository = new FakePlayersRepository();

        const createPlayerService = new CreatePlayerService(
            fakePlayersRepository,
        );

        await createPlayerService.execute({
            name: 'Caio',
            email: 'caio@example.com',
        });

        expect(
            createPlayerService.execute({
                name: 'Caio',
                email: 'caio@example.com',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });
});
