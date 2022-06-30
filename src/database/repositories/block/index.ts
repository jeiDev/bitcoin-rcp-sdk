import { dbConnection } from '../../connection';
import { BlockEntity } from '../../entities/block.entity'

export const blockRepository = dbConnection.getRepository(BlockEntity).extend({
  
});
