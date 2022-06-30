import { Column, CreateDateColumn, Entity, Generated, PrimaryColumn } from "typeorm";
import { Base } from "./base";

@Entity({ name: "addresses" })
export class AddressEntity extends Base {
    @Generated('increment')
    @PrimaryColumn("int8")
    id: number;

    @Column({ type: "text" })
    address: string;

    @Column({ type: "text" })
    privKey: string;

    @Column()
    walletAccountId: number;

    @CreateDateColumn({ type: "timestamptz" })
    createdAt: Date;
}
