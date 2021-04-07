let mode = process.env.NODE_ENV === 'production'? 'production': 'development';
let target = process.env.NODE_ENV === 'production'? 'browserslist':'web';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    mode: mode,
    target: target,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /(node_modules|test)/,
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    plugins: [new MiniCssExtractPlugin()],

    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
    }
}
