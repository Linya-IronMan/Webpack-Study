/*
* mode devlopment production
* entry 入口文件
* output path filename 打包输出路径
* devtool source-map
* module rules loader
* plugins 插件
* devServer 开发服务器
*/

// 这个是跑在服务器上的 需要使用 CommonJS 规范
const { resolve }  = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: resolve(__dirname, 'src/app.js'),
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'app.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            { test: /\.tpl$/, 
              use: [
                'babel-loader',
                { // 先经过自己写的 loader 生成一个字符串 交给 babel-loader
                    loader: './loaders/tpl-loader',
                    options: {
                        log: true
                    }
                }
            ] },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        })    
    ],
    devServer: {
        port: 3333
    }
}