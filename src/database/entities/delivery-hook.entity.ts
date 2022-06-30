import {Column, CreateDateColumn, Entity, Generated, PrimaryColumn} from "typeorm";
import { StatusDeliveryHookEnum } from "../../interfaces/entity/delivery-hook/delivery-hook.enum";
import { Base } from "./base";

@Entity({ name: "deliveries-hooks" })
export class DeliveryHookEntity extends Base {
    
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
        type: "enum",
        nullable: true,
        enum: StatusDeliveryHookEnum
    })
    status: StatusDeliveryHookEnum;

    @Column({ 
        type: "int",
        nullable: true
    })
    statusCode?: number;

    @Column()
    referenceHookId: number;

    @CreateDateColumn({ type: "timestamptz" })
    createdAt: Date;
    
}
