const path = require('path')

/**
 * and that is the reason why nobody develops a custom basename method...
 * 
 * @param {string} string
 * @param {string} [extension]
 */
module.exports = function (string, extension) {
    return path.basename(string, path.extname(string))
}