import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddEnumTypeCard1666056541863 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TYPE "public"."languages_type" AS ENUM('portugues', 'ingles', 'japones')`,
        );
        await queryRunner.query(
            `ALTER TABLE "tb_card" ADD "language" "public"."languages_type"`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE tb_card DROP COLUMN "type"`);
        await queryRunner.query(`DROP TYPE "public"."languages_type"`);
    }
}
