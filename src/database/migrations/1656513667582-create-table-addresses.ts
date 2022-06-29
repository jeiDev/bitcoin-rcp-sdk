import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableAddresses1656513667582 implements MigrationInterface {
    name = 'createTableAddresses1656513667582'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" BIGSERIAL NOT NULL, "address" text NOT NULL, "privKey" text NOT NULL, "walletAccountId" integer NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
