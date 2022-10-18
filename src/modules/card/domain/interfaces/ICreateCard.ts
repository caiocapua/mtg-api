export enum CardLanguagesType {
    INGLES = 'ingles',
    PORTUGUES = 'portugues',
    JAPONES = 'japones',
}

export interface ICreateCard {
    playerId: string;

    name: string;

    edition: string;

    language: CardLanguagesType;

    foil: boolean;

    price: number;

    quantity: number;
}
