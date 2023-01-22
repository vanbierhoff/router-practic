import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

// eslint-disable-next-line @typescript-eslint/no-var-requires,@typescript-eslint/naming-convention
const common = require('./webpack.config');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const config: Configuration & Record<string, any> = merge<Configuration>(common, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.prod.json'
                }
            }
        ]
    }
});

export default config;
