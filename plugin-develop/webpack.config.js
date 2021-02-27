const { resolve } = require('path')

const MdToHtmlPlugin = require('./plugin/md-to-html-plugin/index.js');

module.exports = {
    mode: 'development',
    entry: resolve(__dirname, 'src/app.js'), // 入口 是一个 空文件 如何调用 plugins？
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new MdToHtmlPlugin({
            template: resolve(__dirname, 'test.md'),
            filename: 'test.html'
        })
    ]
}