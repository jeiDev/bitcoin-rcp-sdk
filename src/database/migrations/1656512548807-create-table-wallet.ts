import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableWallet1656512548807 implements MigrationInterface {
    name = 'createTableWallet1656512548807'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."wallets_network_enum" AS ENUM('testnet', 'mainnet')`);
        await queryRunner.query(`CREATE TABLE "wallets" ("id" BIGSERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "network" "public"."wallets_network_enum" NOT NULL, "passphrase" text NOT NULL, "pubKey" text NOT NULL, "applicationId" integer NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_8402e5df5a30a229380e83e4f7e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "wallets"`);
        await queryRunner.query(`DROP TYPE "public"."wallets_network_enum"`);
    }

}
