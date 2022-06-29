import { dbConnection } from '../../connection';
import { WalletAccountEntity } from '../../entities/wallet-account.entity'

export const walletAccountRepository = dbConnection.getRepository(WalletAccountEntity).extend({
  
});
