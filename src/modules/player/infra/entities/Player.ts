import { Card } from '@modules/card/infra/entities/Card';
import { ICreatePlayer } from '@modules/player/domain/interfaces/ICreatePlayer';
import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    Column,
    OneToMany,
} from 'typeorm';

@Entity('tb_player')
export class Player implements ICreatePlayer {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @OneToMany(() => Card, card => card.player)
    card: Card[];
}
