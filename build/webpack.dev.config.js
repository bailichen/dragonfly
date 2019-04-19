const path = require('path');

const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseConfig, {
    mode: 'development',
    output: {
        publicPath: '/',
        path: path.resolve('dev'),
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    // devServer: {
    //     proxy: [{
    //         context: ['/wechart_class.php'],
    //         target: 'http://shijianguanlixueyuan.com',
    //     }]
    // },
    devtool: "#cheap-module-source-map",
    watchOptions: {
        ignored: /node_modules/,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
});
console.log('/device');