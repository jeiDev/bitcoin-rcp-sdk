import { Column, DeleteDateColumn, Entity, Generated, PrimaryColumn } from "typeorm";
import { Base } from "./base";

@Entity({ name: "wallets-accounts" })
export class WalletAccountEntity extends Base {
    @Generated('increment')
    @PrimaryColumn("int8")
    id: number;

    @Generated('uuid')
    @Column({ type: "uuid" })
    uuid: string;

    @Column()
    name: string;

    @Column()
    index: number;

    @Column()
    walletId: number;

    @DeleteDateColumn({ type: "timestamptz" })
    deletedAt: Date;
}
