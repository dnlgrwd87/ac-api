import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddBug1587965362281 implements MigrationInterface {
    name = 'AddBug1587965362281';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "bug" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "critterpedia_image" character varying, "furniture_image" character varying, "icon_image" character varying, "sell_price" integer NOT NULL, "obtained_from" character varying NOT NULL, "weather" character varying NOT NULL, "color1" character varying NOT NULL, "color2" character varying NOT NULL, "description" character varying, "active_hours" jsonb NOT NULL, "active_months" jsonb NOT NULL, "spreadsheet_id" character varying NOT NULL, CONSTRAINT "UQ_7baf2395e00c64a5b9e2177e0ad" UNIQUE ("name"), CONSTRAINT "UQ_1ff7f0426457726911d930e8cab" UNIQUE ("spreadsheet_id"), CONSTRAINT "PK_9e7f67c6911b62a81ac3e336d4b" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "bug"`, undefined);
    }

}
