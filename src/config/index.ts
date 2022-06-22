import 'dotenv/config';
import { ConfigI } from '../interfaces/config/config.interface';

const config: ConfigI = {
    bitcoin: {
        username: `${process.env.BITCOIN_USERNAME}`,
        password: `${process.env.BITCOIN_PASSWORD}`,
        network: `${process.env.BITCOIN_NETWORK}`,
        url: `${process.env.BITCOIN_URL}`
    }
}

export default config;