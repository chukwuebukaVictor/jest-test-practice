// const { expect } = require('@jest/globals')
// const { describe } = require('yargs')
const reverseString = require('./reverseStr')

describe('Reverse string', () =>{
    test('String reverse', () => {
        expect(reverseString('victor')).toBe('rotciv')
    })
})