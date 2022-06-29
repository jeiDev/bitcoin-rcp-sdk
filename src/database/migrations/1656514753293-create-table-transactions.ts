import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableTransactions1656514753293 implements MigrationInterface {
    name = 'createTableTransactions1656514753293'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."transaction_type_enum" AS ENUM('received', 'sended')`);
        await queryRunner.query(`CREATE TABLE "transactions" ("id" BIGSERIAL NOT NULL, "hash" text NOT NULL, "type" "public"."transaction_type_enum" NOT NULL, "amount" double precision NOT NULL, "blockId" integer, "addressId" integer NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "invalidAt" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "transactions"`);
        await queryRunner.query(`DROP TYPE "public"."transaction_type_enum"`);
    }

}
