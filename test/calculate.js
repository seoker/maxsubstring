const assert = require('assert');
const calculate = require('./../calculate')

describe('calculate()', function () {
  it('normal case', function () {
    const { input, expected } = require('./1.json');
    assert.equal(calculate(input.string, input.dictionary), expected);
  });

  it('advance case', function () {
    const { input, expected } = require('./2.json');
    assert.equal(calculate(input.string, input.dictionary), expected);
  });

  it('no result case', function () {
    const { input, expected } = require('./3.json');
    assert.equal(calculate(input.string, input.dictionary), expected);
  });

  it('redundant substring case', function () {
    const { input, expected } = require('./4.json');
    assert.equal(calculate(input.string, input.dictionary), expected);
  });
});