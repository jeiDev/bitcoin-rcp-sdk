import { FindManyOptions, FindOneOptions } from "typeorm"
import { dbConnection } from '../connection'
import { ApplicationEntity } from '../entities/application.entity'

export const applicationRepository = dbConnection.getRepository(ApplicationEntity).extend({
    find(filter: FindManyOptions<ApplicationEntity>): Promise<ApplicationEntity[]> {
        return this.find(filter)
    },
    findOne(filter: FindOneOptions<ApplicationEntity>): Promise<ApplicationEntity | null> {
        return this.findOne(filter)
    },
});