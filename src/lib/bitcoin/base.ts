import { AxiosRequestConfig } from "axios";
// import { ProviderResponseI } from "../../interfaces/lib/bitcoin/bitcoin.interface";
import Base from "../../providers/base";
import _config from "../../config";
import { BitcoinConfigI } from "../../interfaces/config/config.interface";
import { BitcoinBaseResponseI } from "../../interfaces/lib/bitcoin/bitcoin.interface";

const config: BitcoinConfigI = _config.bitcoin;
const token: string = Buffer.from(`${config.username}:${config.password}`).toString("base64");
const api: string = config.url;
const header = {
    'Content-Type': 'text/plain',
    'Authorization': `Basic ${token}`
}

class BitcoinBase extends Base {
    private readonly data = {
        id: config.network,
        jsonrpc: "2.0",
    }

    constructor(){
        super(api, {}, header, true)
    }
    
    protected async _post(path: string, data: object = {}, config: AxiosRequestConfig = {}): Promise<BitcoinBaseResponseI>{
        const resp = await this.post(path, {
            ...data,
            ...this.data
        }, config);
        if(resp.error) return Promise.resolve({data: null, error: resp.error?.error || resp.error});
        return Promise.resolve({data: resp.data.result, error: null});
    }

}

export default BitcoinBase;