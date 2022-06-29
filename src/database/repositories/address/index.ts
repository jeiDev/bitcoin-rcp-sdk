import { dbConnection } from '../../connection';
import { AddressEntity } from '../../entities/address.entity'

export const addressRepository = dbConnection.getRepository(AddressEntity).extend({
  
});
