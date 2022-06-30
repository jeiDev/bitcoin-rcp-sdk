import { Column, Entity, Generated } from 'typeorm'
import { Base } from './base'

@Entity({ name: 'example' })
export class Example extends Base {

    @Generated('increment')
    id: number;

    @Column('uuid', { unique: true })
    uuid: string;

    @Column('boolean', { default: true })
    isExample: boolean;
}