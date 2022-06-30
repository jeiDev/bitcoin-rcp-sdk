import { Column, Entity, Generated, CreateDateColumn, DeleteDateColumn, PrimaryColumn } from 'typeorm'
import { Base } from './base'

@Entity({ name: 'applications' })
export class ApplicationEntity extends Base {

    @Generated('increment')
    @PrimaryColumn("int8")
    id: number;

    @Column()
    name: string;

    @Column()
    slug?: string;

    @Column({ type: "text" })
    apiKey?: string;

    @CreateDateColumn({ type: "timestamptz" })
    createdAt: Date;

    @DeleteDateColumn({ type: "timestamptz" })
    deletedAt: Date;
    
}