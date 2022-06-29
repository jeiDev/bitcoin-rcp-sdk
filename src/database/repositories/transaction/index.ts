import { dbConnection } from '../../connection';
import { TransactionEntity } from '../../entities/transaction.entity'

export const transactionRepository = dbConnection.getRepository(TransactionEntity).extend({
  
});
