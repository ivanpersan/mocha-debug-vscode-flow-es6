const chai = require('chai')
const should = chai.should()
const expect = chai.expect
const addService = require('../src/services/add.service').AddService;

describe('Add Service Tests', function () {
    describe('Add Tests', function () {
        it('Given two numbers, 3 and 4, addTwoNumbers should return 7', function () {
            addService.addTwoNumbers(3, 4).should.equal(7);
        })
        it('Given two numbers, 2 and -1, addTwoNumbers should return 1', function () {
            addService.addTwoNumbers(2, -1).should.equal(1);
        })
        it('Given two numbers, 2 and -1, getOperationAddTwoNumbers should return 1', function () {
            addService.getOperationAddTwoNumbers(2, -1).result.should.equal(1);
        })
    })
})