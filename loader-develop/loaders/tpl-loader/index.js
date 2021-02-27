const { tplReplace } = require('../utils');
const { getOptions } = require('loader-utils');
function tplLoader (source) {
    source = source.replace(/\s+/g, '');  // replace 会返回一个新的字符串？

    // console.log(source)
    // 导出的是一个字符串 经过 babel-loader处理之后成为一个应用程序
    const { log } = getOptions(this)
    const _log = log ? `console.log('compiled the file which is from ${ this.resourcePath }')` : '';
    // console.log(tplReplace.toString(), 'tplReplaceFUnction')
    return `
        export default (options) => {
            ${ tplReplace.toString() }
            ${ _log.toString() }
            return tplReplace('${source}', options);
        }
    `
}

module.exports = tplLoader

