import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableDeliveriesHooks1656517016927 implements MigrationInterface {
    name = 'createTableDeliveriesHooks1656517016927'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."deliveries-hooks_status_enum" AS ENUM('failed', 'successfully')`);
        await queryRunner.query(`CREATE TABLE "deliveries-hooks" ("id" BIGSERIAL NOT NULL, "url" text NOT NULL, "payload" jsonb NOT NULL DEFAULT '{}', "status" "public"."deliveries-hooks_status_enum", "statusCode" integer, "referenceHookId" integer NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_da5bd41a2a6de29862795b39f80" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "transactions_id_seq" OWNED BY "transactions"."id"`);
        await queryRunner.query(`ALTER TABLE "transactions" ALTER COLUMN "id" SET DEFAULT nextval('"transactions_id_seq"')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "transactions_id_seq"`);
        await queryRunner.query(`DROP TABLE "deliveries-hooks"`);
        await queryRunner.query(`DROP TYPE "public"."deliveries-hooks_status_enum"`);
    }

}
