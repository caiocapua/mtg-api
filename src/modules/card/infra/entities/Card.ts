import { ICard } from '@modules/card/domain/interfaces/ICard';
import { CardLanguagesType } from '@modules/card/domain/interfaces/ICreateCard';
import { Player } from '@modules/player/infra/entities/Player';
import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    Column,
    ManyToOne,
    JoinColumn,
    DeleteDateColumn,
} from 'typeorm';

@Entity('tb_card')
export class Card implements ICard {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'player_id' })
    playerId: string;

    @Column()
    name: string;

    @Column()
    edition: string;

    @Column({
        type: 'enum',
        enum: CardLanguagesType,
        default: CardLanguagesType.PORTUGUES,
    })
    language: CardLanguagesType;

    @Column()
    foil: boolean;

    @Column()
    price: number;

    @Column()
    quantity: number;

    @ManyToOne(() => Player, player => player.card)
    @JoinColumn({ name: 'player_id', referencedColumnName: 'id' })
    player: Player;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;
}
