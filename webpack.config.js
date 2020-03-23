const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: './bundle.js',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
        open: true,
        historyApiFallback: true
    },
    watch: true,
    plugins: [
        new HtmlWebpackPlugin({ template: './src/layout/index.html' })
    ]
}
