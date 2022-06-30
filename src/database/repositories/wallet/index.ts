import { dbConnection } from '../../connection';
import { WalletEntity } from '../../entities/wallet.entity'

export const walletRepository = dbConnection.getRepository(WalletEntity).extend({
  
});
