import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableApplication1656510697779 implements MigrationInterface {
    name = 'createTableApplication1656510697779'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "applications" ("id" BIGSERIAL NOT NULL, "name" character varying NOT NULL, "slug" character varying NOT NULL, "apiKey" text NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_938c0a27255637bde919591888f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "applications"`);
    }

}
