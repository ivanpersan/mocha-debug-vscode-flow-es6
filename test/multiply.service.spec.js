const chai = require('chai')
const should = chai.should()
const expect = chai.expect
const multiplyService = require('../src/services/multiply.service').MultiplyService;

describe('Add Service Tests', function () {
    describe('Add Tests', function () {
        it('Given two numbers, 3 and 4, multiplyTwoNumbers should return 12', function () {
            multiplyService.multiplyTwoNumbers(3, 4).should.equal(12);
        })
        it('Given two numbers, 2 and -1, multiplyTwoNumbers should return -2', function () {
            multiplyService.multiplyTwoNumbers(2, -1).should.equal(-2);
        })
    })
})