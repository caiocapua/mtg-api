import { Card } from '@modules/card/infra/entities/Card';
import { Player } from '@modules/player/infra/entities/Player';
import { DataSource } from 'typeorm';
import { CreatePlayer1663786027528 } from './migrations/1663786027528-CreatePlayer';
import { CreateCard1666024201586 } from './migrations/1666024201586-CreateCard';
import { AddColumnPlayerID1666031980849 } from './migrations/1666031980849-AddColumnPlayerID';
import { AddEnumTypeCard1666056541863 } from './migrations/1666056541863-AddEnumTypeCard';

export const dataSource = new DataSource({
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: 'docker',
    database: 'apimtg',
    entities: [Player, Card],
    migrations: [
        CreatePlayer1663786027528,
        CreateCard1666024201586,
        AddColumnPlayerID1666031980849,
        AddEnumTypeCard1666056541863,
    ],
});
