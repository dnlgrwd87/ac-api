import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddRarityColumn1588134639983 implements MigrationInterface {
    name = 'AddRarityColumn1588134639983';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bug" ADD "rarity" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "fish" ADD "rarity" character varying NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "fish" DROP COLUMN "rarity"`, undefined);
        await queryRunner.query(`ALTER TABLE "bug" DROP COLUMN "rarity"`, undefined);
    }

}
