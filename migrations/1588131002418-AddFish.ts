import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddFish1588131002418 implements MigrationInterface {
    name = 'AddFish1588131002418';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "fish" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "critterpedia_image" character varying, "furniture_image" character varying, "icon_image" character varying, "museum_description" character varying, "catch_phrase" character varying, "sell_price" integer NOT NULL, "obtained_from" character varying NOT NULL, "color1" character varying NOT NULL, "color2" character varying NOT NULL, "active_hours" jsonb NOT NULL, "active_months" jsonb NOT NULL, "spreadsheet_id" character varying NOT NULL, "shadow" character varying NOT NULL, "size" character varying NOT NULL, "lighting_type" character varying NOT NULL, CONSTRAINT "UQ_83af8ea866371fe7b63deab7860" UNIQUE ("name"), CONSTRAINT "UQ_474deb8862449aa8a5867c75c0f" UNIQUE ("spreadsheet_id"), CONSTRAINT "PK_6ffb9180fd59d279a93e2a6f786" PRIMARY KEY ("id"))`,
            undefined
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "fish"`, undefined);
    }
}
