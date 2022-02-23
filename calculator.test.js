// const { expect } = require("@jest/globals");
// const { it } = require("jest-circus");
// const { describe } = require("yargs");

const Calculator = require('./calculator.js')

describe('addition of numbers',() => {
    const addNum = new Calculator();
    it('Not a number', () => {
        expect(() => {
            addNum.add('1', 5)
        }).toThrow("Cannot ADD 'Argument is not a number'")
    })

    it('Missing argument', () => {
        expect( () => {
            addNum.add(5)
        }).toThrow( "Cannot ADD 'Argument is not a number'")
    })

    it('Addition of numbers', () => {
        expect(addNum.add(1,5)).toBe(6)
        })
})


describe('subtraction of numbers',() => {
    const addNum = new Calculator();
    it('Not a number', () => {
        expect( () => {
            addNum.subtract('1', 5)
        }).toThrow("Cannot SUBTRACT 'Argument is not a number'")
    })

    it('Missing argument', () => {
        expect( () => {
            addNum.subtract(5)
        }).toThrow( "Cannot SUBTRACT 'Argument is not a number'")
    })

    it('Subtraction of numbers', () => {
        expect(addNum.subtract(5,1)).toBe(4)
        })
})



describe('Division of numbers',() => {
    const addNum = new Calculator();
    it('Not a number', () => {
        expect( () => {
            addNum.divide('1', 5)
        }).toThrow("Cannot DIVIDE 'Argument is not a number'")
    })

    it('Missing argument', () => {
        expect( () => {
            addNum.divide(5)
        }).toThrow( "Cannot DIVIDE 'Argument is not a number'")
    })

    it('Division of numbers', () => {
        expect(addNum.divide(10,5)).toBe(2)
        })
})



describe('Multiplication of numbers',() => {
    const addNum = new Calculator();
    it('Not a number', () => {
        expect(() => {
            addNum.multiply('1', 5)
        }).toThrow("Cannot MULTIPLY 'Argument is not a number'")
    })

    it('Missing argument', () => {
        expect( () => {
            addNum.multiply(5)
        }).toThrow("Cannot MULTIPLY 'Argument is not a number'")
    })

    it('Addition of numbers', () => {
        expect(addNum.multiply(1,5)).toBe(5)
        })
})