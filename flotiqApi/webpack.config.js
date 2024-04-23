const path = require('path');

module.exports = {
    mode: 'production', // 'development' for development
    entry: './src/index.ts', // Path to your main TypeScript file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'], // Add '.js' to resolve for browser environments
    },
    devtool: 'source-map', // Optional: Generates source maps
};

