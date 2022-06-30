import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableWalletsAccounts1656513312529 implements MigrationInterface {
    name = 'createTableWalletsAccounts1656513312529'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "wallets-accounts" ("id" BIGSERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "index" integer NOT NULL, "walletId" integer NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_1d2879ca1bd71286315fe82d51a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "wallets-accounts"`);
    }

}
