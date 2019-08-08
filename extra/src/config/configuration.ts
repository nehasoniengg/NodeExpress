import { config } from 'dotenv';
import { IConfig } from './IConfig';
config();
const configuration: IConfig = Object.freeze({
    port: process.env.PORT,
    // tslint:disable-next-line: object-literal-sort-keys
    node_env: process.env.NODE_ENV,
});
export default configuration;
