const basename = require('..')
const assert = require('assert')

describe('basename', () => {

    var tests = [
        ['C:\\users\\rofl\\example.jpeg', 'example'],
        ['C:\\users\\rofl\\example.final.jpeg', 'example.final'],
        ['/etc/var/foo.bar.baz', 'foo.bar'],
        ['c/asd/foo.bar.baz', 'foo.bar'],
        ['foo.bar.baz', 'foo.bar'],
        ['.foo.bar.baz', '.foo.bar'],
        ['.foo', '.foo'],
        ['foo', 'foo']
    ]

    tests.forEach(t => {
        it(`should return ${t[1]} for ${t[0]}`, () => {
            assert.equal(basename(t[0]), t[1])
        })
    })
})