import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddBagAndBagVariation1587513266202 implements MigrationInterface {
    name = 'AddBagAndBagVariation1587513266202';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "bag_variation" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "image" character varying, "body_color" character varying NOT NULL, "color1" character varying NOT NULL, "color2" character varying NOT NULL, "spreadsheet_id" character varying NOT NULL, "bag_id" integer NOT NULL, CONSTRAINT "UQ_3f403732e5a6d11620405bc9bd2" UNIQUE ("spreadsheet_id"), CONSTRAINT "PK_a8ff25d7e124f5543e94e8e93f9" PRIMARY KEY ("id"))`,
            undefined
        );
        await queryRunner.query(
            `CREATE TABLE "bag" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "buy_price" integer NOT NULL, "sell_price" integer NOT NULL, "diy" boolean NOT NULL, "size" character varying NOT NULL, "style" character varying NOT NULL, "source" character varying NOT NULL, "source_notes" character varying NOT NULL, "in_catalog" boolean NOT NULL, "can_reorder" boolean NOT NULL, CONSTRAINT "UQ_5eb35615e19c0bb629f9fb4b1b1" UNIQUE ("name"), CONSTRAINT "PK_6e681d0246f71dc274b5a5d9955" PRIMARY KEY ("id"))`,
            undefined
        );
        await queryRunner.query(
            `ALTER TABLE "bag_variation" ADD CONSTRAINT "FK_f1fbcd10fab303bd7b2861e9c63" FOREIGN KEY ("bag_id") REFERENCES "bag"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "bag_variation" DROP CONSTRAINT "FK_f1fbcd10fab303bd7b2861e9c63"`,
            undefined
        );
        await queryRunner.query(`DROP TABLE "bag"`, undefined);
        await queryRunner.query(`DROP TABLE "bag_variation"`, undefined);
    }
}
