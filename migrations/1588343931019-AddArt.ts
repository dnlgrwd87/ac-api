import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddArt1588343931019 implements MigrationInterface {
    name = 'AddArt1588343931019';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "art" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "image" character varying, "artist" character varying NOT NULL, "genuine" boolean NOT NULL, "real_artwork_title" character varying NOT NULL, "high_res_texture" character varying, "museum_description" character varying, "buy_price" integer NOT NULL, "sell_price" integer NOT NULL, "hha_concepts" jsonb NOT NULL, "colors" jsonb NOT NULL, "category" character varying NOT NULL, "tag" character varying NOT NULL, "hha_series" character varying NOT NULL, "hha_set" character varying NOT NULL, "interactive" boolean NOT NULL, "size" character varying NOT NULL, "source" character varying NOT NULL, "source_notes" character varying NOT NULL, "speaker_type" character varying NOT NULL, "lighting_type" character varying NOT NULL, "in_catalog" boolean NOT NULL, "can_reorder" boolean NOT NULL, "spreadsheet_id" character varying NOT NULL, CONSTRAINT "UQ_2a85200ee9f616251cc3555279f" UNIQUE ("spreadsheet_id"), CONSTRAINT "PK_d7867f9fa7239b188ec631066bb" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "art"`, undefined);
    }

}
