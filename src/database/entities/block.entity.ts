import { Column, CreateDateColumn, Entity, Generated, PrimaryColumn } from "typeorm";
import { Base } from "./base";

@Entity({ name: "blocks" })
export class BlockEntity extends Base {
    @Generated('increment')
    @PrimaryColumn("int8")
    id: number;

    @Column({ type: "int8" })
    height: number;

    @CreateDateColumn({ type: "timestamptz" })
    createdAt: Date;
}
