import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableBlocks1656515133902 implements MigrationInterface {
    name = 'createTableBlocks1656515133902'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "blocks" ("id" BIGSERIAL NOT NULL, "height" bigint NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_8244fa1495c4e9222a01059244b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."transaction_entity_type_enum" AS ENUM('received', 'sended')`);
        await queryRunner.query(`CREATE TABLE "transaction_entity" ("id" BIGSERIAL NOT NULL, "hash" text NOT NULL, "type" "public"."transaction_entity_type_enum" NOT NULL, "amount" double precision NOT NULL, "blockId" integer, "addressId" integer NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "invalidAt" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_6f9d7f02d8835ac9ef1f685a2e8" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "transaction_entity"`);
        await queryRunner.query(`DROP TYPE "public"."transaction_entity_type_enum"`);
        await queryRunner.query(`DROP TABLE "blocks"`);
    }

}
