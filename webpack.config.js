const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');const basePath = __dirname;
const distPath = 'dist';

 
const indextInput = './public/index.html';
const indexOutput = 'index.html';const webpackInitConfig = {
    mode: 'development',
    resolve: {
        extensions: ['.js']
    },
    entry: {
        app: ['@babel/polyfill', './src/index.js'],
    },
    output: {
        path: path.join(basePath, distPath),
        filename: '[chunkhash][name].js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: indexOutput, 
            template: indextInput,
        })
    ]
};module.exports = webpackInitConfig;