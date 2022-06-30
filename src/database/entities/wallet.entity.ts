import { Column, CreateDateColumn, DeleteDateColumn, Entity, Generated, PrimaryColumn,  } from "typeorm";
import { WalletNetworkEnum } from "../../interfaces/entity/wallet/wallet.enum";
import { Base } from "./base";

@Entity({ name: "wallets" })
export class WalletEntity extends Base{
    @Generated('increment')
    @PrimaryColumn("int8")
    id: number;

    @Generated('uuid')
    @Column({type: "uuid"})
    uuid: string; 

    @Column()
    name: string;

    @Column({
        type: "enum",
        enum: WalletNetworkEnum
    })
    network: WalletNetworkEnum;

    @Column({ type: "text" })
    passphrase: string;

    @Column({ type: "text" })
    pubKey: string;

    @Column()
    applicationId: number;

    @CreateDateColumn({ type: "timestamptz" })
    createdAt: Date;

    @DeleteDateColumn({ type: "timestamptz" })
    deletedAt: Date;
}
