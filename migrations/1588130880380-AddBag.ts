import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddBag1588130880380 implements MigrationInterface {
    name = 'AddBag1588130880380';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "bag" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "image" character varying, "storage_image" character varying, "buy_price" integer NOT NULL, "sell_price" integer NOT NULL, "body_color" character varying NOT NULL, "label_themes" jsonb NOT NULL, "color1" character varying NOT NULL, "color2" character varying NOT NULL, "diy" boolean NOT NULL, "size" character varying NOT NULL, "style" character varying NOT NULL, "source" character varying NOT NULL, "source_notes" character varying NOT NULL, "seasonal_availability" character varying NOT NULL, "in_catalog" boolean NOT NULL, "can_reorder" boolean NOT NULL, "spreadsheet_id" character varying NOT NULL, CONSTRAINT "UQ_32425fc71bca04a49a829779b30" UNIQUE ("spreadsheet_id"), CONSTRAINT "PK_6e681d0246f71dc274b5a5d9955" PRIMARY KEY ("id"))`,
            undefined
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "bag"`, undefined);
    }
}
