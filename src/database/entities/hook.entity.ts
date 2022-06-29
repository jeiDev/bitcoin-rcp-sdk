import { Column, CreateDateColumn, DeleteDateColumn, Entity, Generated, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { TypeHookEnum } from "../../interfaces/entity/hook/hook.enum";
import { Base } from "./base";

@Entity({ name: "hooks" })
export class HookEntity extends Base {
    @Generated('increment')
    @PrimaryColumn("int8")
    id: number;

    @Column({ type: "text" })
    url: string;

    @Column({
        type: "enum",
        enum: TypeHookEnum
    })
    type: TypeHookEnum;

    @Column()
    applicationId: number;

    @CreateDateColumn({ type: "timestamptz" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamptz" })
    updatedAt: Date;

    @DeleteDateColumn({ type: "timestamptz" })
    deletedAt: Date;
    
}
