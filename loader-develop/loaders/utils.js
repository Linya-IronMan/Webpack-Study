 function tplReplace(template, replaceObject) {
    return template.replace(/\{\{(.*?)\}\}/g, function(node, key) {
        console.log(replaceObject, 'replaceObject')
        return replaceObject[key]
    })
}

module.exports = {
    tplReplace
}