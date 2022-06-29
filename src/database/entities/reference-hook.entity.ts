import { Column, CreateDateColumn, DeleteDateColumn, Entity, Generated, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Base } from "./base";

@Entity({ name: "reference-hooks" })
export class ReferenceHookEntity extends Base {
    @Generated('increment')
    @PrimaryColumn("int8")
    id: number;

    @Column({ type: "text" })
    url: string;

    @Column({
        type: "jsonb",
        default: {}
    })
    payload: object;

    @Column({ 
        type: "boolean",
        default: false
    })
    completed?: boolean;

    @Column({ 
        type: "int",
        default: 10
    })
    limitSend?: number;

    @Column()
    reference: string;

    @Column()
    referenceId: number;

    @Column()
    hookId: number;

    @CreateDateColumn({ type: "timestamptz" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamptz" })
    updatedAt: Date;

    @DeleteDateColumn({ type: "timestamptz" })
    deletedAt: Date;
}
