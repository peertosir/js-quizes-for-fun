const { assert } = require("chai");
const { describe, it } = require("mocha");
const {fizzBuzzQuiz} = require('../src/fizzbuzz');

describe('FizzBuzz quiz tests', () => {
    it('Test for Fizz', () => {
        assert.strictEqual(fizzBuzzQuiz(3), 'Fizz');
    })
    it('Test for Buzz', () => {
        assert.strictEqual(fizzBuzzQuiz(5), 'Buzz');
    })
    it('Test for FizzBuzz', () => {
        assert.strictEqual(fizzBuzzQuiz(15), 'FizzBuzz');
    })
    it('Test for just number', () => {
        assert.strictEqual(fizzBuzzQuiz(4), 4);
    })
});