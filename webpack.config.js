const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './build'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    // references .babelrc
                    loader: 'babel-loader',
                }
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Deploy Designer',
            template: 'assets/index.html'
        }),
    ],
    devServer: {
        static: {
            directory: './build',
        },
        compress: true,
        port: 9000,
    }
}