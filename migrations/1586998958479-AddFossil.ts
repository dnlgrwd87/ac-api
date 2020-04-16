import {MigrationInterface, QueryRunner} from "typeorm";

export class AddFossil1586998958479 implements MigrationInterface {
    name = 'AddFossil1586998958479'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "fossil" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "image_url" character varying, "sell_price" integer NOT NULL, CONSTRAINT "UQ_a784368048c233b5bb1b07b0a87" UNIQUE ("name"), CONSTRAINT "PK_958c7d9f4a771c1acb3cb5aa2c6" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "fossil"`, undefined);
    }

}
