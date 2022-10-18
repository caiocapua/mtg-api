import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IPlayerRepository } from '../domain/repositories/IPlayersRepository';
import { Player } from '../infra/entities/Player';

interface IRequest {
    name: string;
    email: string;
}

@injectable()
export class CreatePlayerService {
    constructor(
        @inject('PlayersRepository')
        private playersRepository: IPlayerRepository,
    ) {}

    async execute({ name, email }: IRequest): Promise<Player> {
        const emailExists = await this.playersRepository.findByEmail(email);

        if (emailExists) throw new AppError('Email already exists', 404);

        const player = await this.playersRepository.create({ name, email });

        return player;
    }
}
