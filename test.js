const chai = require('chai')
const assert = chai.assert
const main = require('./scripts/indexTest')
var should = require('chai').should();


describe('daysBetween function', function () {
  it('should take in valid inputs in the form of calendar dates and specified progress bar', function () {
    main.daysBetween1.should.exist
    assert.typeOf(main.daysBetween1, "function")
  })
})

describe('clear functions', function () {
  it('should clear the goal field in which it is placed', function () {
    main.clear1.should.exist
    assert.typeOf(main.clear1, "function")
    assert.typeOf(main.clear2, "function")
    assert.typeOf(main.clear3, "function")
    assert.typeOf(main.clear4, "function")
  })
})

describe('tally functions', function () {
  it('should tally days, hours and minutes', function () {
    main.tallyDays.should.exist
    assert.typeOf(main.tallyDays, "function")
  })
})