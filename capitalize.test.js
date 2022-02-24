// const { describe } = require("yargs");
const capitalize = require('./capitalize.js')


describe('Capitalization of string', () =>{
    test('Capitalized', () => {
        expect(capitalize('victor')).toBe('Victor');

    })
})