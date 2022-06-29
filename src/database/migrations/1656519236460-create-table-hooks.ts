import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableHooks1656519236460 implements MigrationInterface {
    name = 'createTableHooks1656519236460'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."hooks_type_enum" AS ENUM('transaction.received', 'transaction.sended', 'transaction.confirmation', 'transaction.invalidated', 'block.new', 'block.mempool')`);
        await queryRunner.query(`CREATE TABLE "hooks" ("id" BIGSERIAL NOT NULL, "url" text NOT NULL, "type" "public"."hooks_type_enum" NOT NULL, "applicationId" integer NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_6f3b230c5a618ac05cdbde2f8db" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "hooks"`);
        await queryRunner.query(`DROP TYPE "public"."hooks_type_enum"`);
    }

}
