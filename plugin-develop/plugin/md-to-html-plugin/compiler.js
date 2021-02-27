const reg_mark = /^(.+?)\s/;


function createTree (_mdArr) {
    let _htmlPool = {};

    _mdArr.forEach(mdFragment => {
        console.log(mdFragment, 'mdFragment ===')
        const matched = mdFragment.match(reg_mark)
        console.log(matched, 'matched ====');
    })
}

function compileHTML (_mdArr) {

    const _htmlPool = createTree(_mdArr);
}

module.exports = {
    compileHTML
}