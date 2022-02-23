const stringLength = require('./strLength.js')

describe('String Length', () => {
    test('Character Count', () => {
        expect(stringLength('victor')).toBe(6);
    })
    
    test('ZERO character', () => {
        expect(() => {
            stringLength('');
        }).toThrow('String cannot contain ZERO character');
    })
    
    test('More than TEN characters', () => {
        expect(() => {
            stringLength('15556320014155520004478');
        }).toThrow('String cannot contain more than TEN characters');
    })
})