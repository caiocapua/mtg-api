import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export class AddColumnPlayerID1666031980849 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'tb_card',
            new TableColumn({
                name: 'player_id',
                type: 'uuid',
                isNullable: false,
            }),
        );

        await queryRunner.createForeignKey(
            'tb_card',
            new TableForeignKey({
                name: 'CardPlayer',
                columnNames: ['player_id'],
                referencedTableName: 'tb_player',
                referencedColumnNames: ['id'],
                onDelete: 'SET NULL',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('tb_card', 'CardPlayer');
        await queryRunner.dropColumn('tb_card', 'player_id');
    }
}
