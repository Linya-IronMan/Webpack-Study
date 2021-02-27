const { readFileSync } = require('fs')
const { resolve } = require('path');
// const { sources } = require('webpack');
const INNER_MARK = '<!-- inner -->'
const { compileHTML } = require('./compiler.js')

class MdToHtmlPlugin {
    constructor({ template, filename }) {

        if (!template) {
            throw new Error('The config for "template" must be configured');
        }


        this.template = template
        this.filename = filename ? filename : 'md.html'
    }

    apply (compiler) {
        // 内置 compiler 建议看一下源码
        // emit 发布器
        compiler.hooks.emit.tap('md-to-html-plugin', (compilation) => {
            const _assets = compilation.assets;
            const _mdContent = readFileSync(this.template, 'utf8')
            const _templateHTML = readFileSync(resolve(__dirname, 'template.html'), 'utf8')
            const _mdContentArr = _mdContent.split('\r\n')
            const _htmlStr = compileHTML(_mdContentArr);// 将 markdown 语法转化成html字符串
            const _finalHTML = _templateHTML.replace(INNER_MARK, _htmlStr);

            // 这些方法 会被 哪里调用？
            _assets[this.filename] = {
                sources() {
                    return _finalHTML;
                },

                size() {
                    return _finalHTML.length;
                }
            }
            
            console.log(_mdContentArr, "=======");
        });


    }

}

module.exports = MdToHtmlPlugin