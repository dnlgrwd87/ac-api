import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddRecipe1588273222404 implements MigrationInterface {
    name = 'AddRecipe1588273222404';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "recipe" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "category" character varying NOT NULL, "materials" jsonb NOT NULL, "source" character varying NOT NULL, "source_notes" character varying NOT NULL, "spreadsheet_id" character varying NOT NULL, CONSTRAINT "UQ_5b490d0ac36eb4d537228888bfe" UNIQUE ("name"), CONSTRAINT "UQ_a3f474e9aa11e906914cbae908d" UNIQUE ("spreadsheet_id"), CONSTRAINT "PK_e365a2fedf57238d970e07825ca" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "recipe"`, undefined);
    }

}
