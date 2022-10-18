import { container } from 'tsyringe';

import { IPlayerRepository } from '@modules/player/domain/repositories/IPlayersRepository';
import { PlayersRepository } from '@modules/player/infra/repositories/PlayersRepository';
import { ICardsRepository } from '@modules/card/domain/repositories/ICardsRepository';
import { CardsRepository } from '@modules/card/infra/repositories/CardsRepositories';

container.registerSingleton<IPlayerRepository>(
    'PlayersRepository',
    PlayersRepository,
);
container.registerSingleton<ICardsRepository>(
    'CardsRepository',
    CardsRepository,
);
