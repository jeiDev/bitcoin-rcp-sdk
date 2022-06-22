import { TypeNewAddressWalletBitcoinEnum } from "../../interfaces/lib/bitcoin/wallet/wallet.enum";
import { CreateWalletBitcoinI, CreateWalletResponseI, GetNewAddressWalletResponseI, LoadWalletBitcoinI, NewAddressWalletBitcoinI, OptionBumpFeeWalletBitcoinI } from "../../interfaces/lib/bitcoin/wallet/wallet.interface";
import BitcoinBase from "./base";

class Wallet extends BitcoinBase{
    public create(params: CreateWalletBitcoinI): Promise<CreateWalletResponseI>{
        return this._post("/", {
            method: "createwallet",
            params: [
                params.name, 
                params.disabledPrivateKey || false, 
                params.isBlank || false, 
                params.passphrase || "", 
                params.avoidReuse || false,
                params.descriptors || false,
                params.loadOnStartup || false
            ]
        });
    }

    public getNewAddress(params: NewAddressWalletBitcoinI): Promise<GetNewAddressWalletResponseI>{
        return this._post(`/wallet/${params.nameWallet}`, {
            method: "getnewaddress",
            params: [params.nameWallet, params.addressType || TypeNewAddressWalletBitcoinEnum.P2SH_SEGWIT]
        });
    }

    public loadWallet(params: LoadWalletBitcoinI){
        return this._post("/", {
            method: "loadwallet",
            params: [params.nameWallet, params.loadOnStartup || false]
        });
    }

    public bumpFee(txId: string, options: OptionBumpFeeWalletBitcoinI = {}){
        return this._post("/", {
            method: "loadwallet",
            params: [txId, options]
        });
    }
}

export default Wallet;