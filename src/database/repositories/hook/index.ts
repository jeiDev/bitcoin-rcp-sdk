import { dbConnection } from '../../connection';
import { HookEntity } from '../../entities/hook.entity'

export const hookRepository = dbConnection.getRepository(HookEntity).extend({
  
});
