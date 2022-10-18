import { FakePlayersRepository } from '@modules/player/domain/repositories/fakes/FakePlayerRepository';
import 'reflect-metadata';
import { CreatePlayerService } from '../CreatePlayerService';
import { ListPlayersService } from '../ListPlayersService';

describe('execute', () => {
    it('Should be able to return all players', async () => {
        const fakePlayersRepository = new FakePlayersRepository();
        const createPlayerService = new CreatePlayerService(
            fakePlayersRepository,
        );

        const listPlayersService = new ListPlayersService(
            fakePlayersRepository,
        );

        const player = await createPlayerService.execute({
            name: 'Caio',
            email: 'caio@example.com',
        });

        const result = await listPlayersService.execute();

        expect(result).toEqual([player]);
    });

    it('should return an empty players list', async () => {
        const fakePlayersRepository = new FakePlayersRepository();

        const listPlayersService = new ListPlayersService(
            fakePlayersRepository,
        );

        const result = await listPlayersService.execute();

        expect(result).toEqual([]);
    });
});
