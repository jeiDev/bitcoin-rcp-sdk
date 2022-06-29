import { dbConnection } from '../../connection';
import { ReferenceHookEntity } from '../../entities/reference-hook.entity'

export const referenceHookRepository = dbConnection.getRepository(ReferenceHookEntity).extend({
  
});
