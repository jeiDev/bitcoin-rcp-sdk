import { dbConnection } from '../../connection';
import { DeliveryHookEntity } from '../../entities/delivery-hook.entity'

export const deliveryHookRepository = dbConnection.getRepository(DeliveryHookEntity).extend({
  
});
