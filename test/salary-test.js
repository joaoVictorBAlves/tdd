var assert = require('assert');
var calculateSalary = require('../js/salary');

describe('Salary Tests', function () {
    context("Success cases", () => {
        context("Developer", () => {
            it('should return a net salary of 2,440.00 for a Developer with a salary of 3,050.00', function () {
                assert.equal(calculateSalary(3050, "Developer"), 2440);
            });
            it('should return a net salary of 1,800.00 for a Developer with a salary of 2,000.00', function () {
                assert.equal(calculateSalary(2000, "Developer"), 1800);
            });
        });
        context("DBA", () => {
            it('should return a net salary of 2,250.00 for a DBA with a salary of 3,000.00', function () {
                assert.equal(calculateSalary(3000, "DBA"), 2250);
            });

            it('should return a net salary of 1,275.00 for a DBA with a salary of 1,500.00', function () {
                assert.equal(calculateSalary(1500, "DBA"), 1275);
            });
        });
        context("Tester", () => {
            it('should return a net salary of 2,500.00 for a Tester with a salary of 3,000.00', function () {
                assert.equal(calculateSalary(3000, "Tester"), 2250);
            });

            it('should return a net salary of 1,700.00 for a Tester with a salary less than 2,000.00', function () {
                assert.equal(calculateSalary(1000, "Tester"), 850);
            });

        });
        context("Manager", () => {
            it('should return a net salary of 3,500.00 for a Manager with a salary of 5,000.00', function () {
                assert.equal(calculateSalary(5000, "Manager"), 3500);
            });

            it('should return a net salary of 3,200.00 for a Manager with a salary of 4,000.00', function () {
                assert.equal(calculateSalary(4000, "Manager"), 3200);
            });
        });
    });

    context("Failure cases", () => {
        context("Position", () => {
            it('should throw an error for an incorrect position', function () {
                var call = function () { calculateSalary() };
                assert.throws(call, Error, 'Invalid position!');
            });

            it('should throw an error for an empty position', function () {
                var call = function () { calculateSalary() };
                assert.throws(call, Error, 'Position empty!');
            });
        });

        context("Salary", () => {
            it('should throw an error for a negative base salary', function () {
                var call = function () { calculateSalary() };
                assert.throws(call, Error, 'Negative salary is invalid!');
            });

            it('should throw an error for an empty base salary', function () {
                var call = function () { calculateSalary() };
                assert.throws(call, Error, 'Salary empty!');
            });

            it('should throw an error for a base salary with a textual value', function () {
                var call = function () { calculateSalary() };
                assert.throws(call, Error, 'String salary is invalid!');
            });
        });
    });
});