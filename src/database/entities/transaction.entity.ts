import { Column, CreateDateColumn, Entity, Generated, PrimaryColumn } from "typeorm";
import { TypeTransactionEnum } from "../../interfaces/entity/transaction/transaction.enum";
import { Base } from "./base";

@Entity({ name: "transactions" })
export class TransactionEntity extends Base {
    @Generated('increment')
    @PrimaryColumn("int8")
    id: number;

    @Column({ type: "text" })
    hash: string;

    @Column({ 
        type: "enum",
        enum: TypeTransactionEnum
    })
    type: TypeTransactionEnum;

    @Column({ type: "float8" })
    amount: number;

    @Column({ nullable: true })
    blockId?: number;

    @Column()
    addressId: number;

    @CreateDateColumn({ type: "timestamptz" })
    createdAt: Date;

    @Column({ type: "timestamptz" })
    invalidAt: Date;
}
