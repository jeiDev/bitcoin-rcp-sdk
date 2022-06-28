import { FindManyOptions, FindOneOptions } from "typeorm"
import { dbConnection } from '../connection'
import { Example } from '../entities/example.entity'

export const exampleRepository = dbConnection.getRepository(Example).extend({
    find(filter: FindManyOptions<Example>): Promise<Example[]> {
        return this.find(filter)
    },
    findOne(filter: FindOneOptions<Example>): Promise<Example | null> {
        return this.findOne(filter)
    },
});