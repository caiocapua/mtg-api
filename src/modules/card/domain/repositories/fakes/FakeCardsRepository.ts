import { Card } from '@modules/card/infra/entities/Card';
import { v4 as uuidV4 } from 'uuid';
import { ICreateCard } from '../../interfaces/ICreateCard';
import { IFakeCardsRepository } from './IFakeCardsRepository';

export class FakeCardsRepository implements IFakeCardsRepository {
    private cards: Card[] = [];

    async create({
        playerId,
        name,
        language,
        edition,
        foil,
        price,
        quantity,
    }: ICreateCard): Promise<Card> {
        const card = new Card();

        Object.assign(card, {
            id: uuidV4(),
            playerId,
            name,
            language,
            edition,
            foil,
            price,
            quantity,
        });

        this.cards.push(card);

        return card;
    }

    async findByName(name: string, playerId: string): Promise<Card[]> {
        const cardsByName = this.cards.filter(card => card.name === name);
        const cards = cardsByName.filter(card => card.playerId === playerId);

        return cards;
    }

    async findAllPlayers(): Promise<Card[]> {
        return this.cards;
    }

    async findById(id: string): Promise<Card | undefined> {
        const card = this.cards.find(card => card.id === id);

        return card;
    }

    async delete(id: string): Promise<void> {
        const cardIndex = this.cards.findIndex(card => card.id === id);

        this.cards.splice(cardIndex, 1);
    }

    async update({
        id,
        playerId,
        price,
        quantity,
    }: Card): Promise<Card | undefined> {
        const card = this.cards.find(card => card.id === id);

        if (card && card.playerId == playerId) {
            Object.assign(card, {
                price,
                quantity,
            });
            this.cards.push(card);
            return card;
        }
    }

    async listCards(): Promise<Card[]> {
        return this.cards;
    }
}
