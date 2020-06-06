const path = require('path');

module.exports = {
    entry: './client_src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'client_src')]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devtool: 'source-maps',
    resolve: {
        extensions: ['.ts','.tsx', '.js', '.json'] // Add '.ts|.tsx' as a resolvable extension, and let the upper ts-loader to handle to compilation. 
    },
    mode: 'development'
}