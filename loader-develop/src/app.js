import tpl from './info.tpl';
// const tpl = require('./info.tpl')

const oApp = document.querySelector('#app');

const info = {
    name: '林涯',
    age: 18,
    career: '学生',
    hobby: '旅行'
}

console.log(info)

oApp.innerHTML = tpl(info)