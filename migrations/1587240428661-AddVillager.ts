import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddVillager1587240428661 implements MigrationInterface {
    name = 'AddVillager1587240428661';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "villager" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "image_url" character varying, "species" character varying NOT NULL, "gender" character varying NOT NULL, "personality" character varying NOT NULL, "birthday" character varying NOT NULL, "catchphrase" character varying NOT NULL, "style1" character varying NOT NULL, "style2" character varying NOT NULL, CONSTRAINT "UQ_d24716150b8017e62c52eaabd53" UNIQUE ("name"), CONSTRAINT "PK_9d754f443230576b94cdacbab94" PRIMARY KEY ("id"))`,
            undefined
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "villager"`, undefined);
    }
}
