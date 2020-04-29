import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddFossil1588130678561 implements MigrationInterface {
    name = 'AddFossil1588130678561';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "fossil" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "image" character varying, "buy_price" integer NOT NULL, "sell_price" integer NOT NULL, "color1" character varying NOT NULL, "color2" character varying NOT NULL, "size" character varying NOT NULL, "source" character varying NOT NULL, "interactive" boolean NOT NULL, "in_catalog" boolean NOT NULL, "can_reorder" boolean NOT NULL, "museum_description" character varying, "spreadsheet_id" character varying NOT NULL, CONSTRAINT "UQ_a784368048c233b5bb1b07b0a87" UNIQUE ("name"), CONSTRAINT "UQ_6f57f419ca52a6614b39913d759" UNIQUE ("spreadsheet_id"), CONSTRAINT "PK_958c7d9f4a771c1acb3cb5aa2c6" PRIMARY KEY ("id"))`,
            undefined
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "fossil"`, undefined);
    }
}
