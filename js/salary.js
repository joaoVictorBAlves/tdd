const { PositionEmptyError, SalaryEmptyError, NegativeSalaryError, InvalidSalaryError } = require("../error/salary-exceptions");

module.exports = function (baseSalary, position) {
    // Exceptions
    if (position === undefined) throw new PositionEmptyError();
    if (baseSalary === undefined) throw new SalaryEmptyError();
    if (baseSalary < 0) throw new NegativeSalaryError();
    if (isNaN(baseSalary)) throw new InvalidSalaryError();

    // Code
    switch (position.toLowerCase()) {
        case "developer":
            return calculateDeveloperSalary(baseSalary);
        case "dba":
            return calculateDBASalary(baseSalary);
        case "tester":
            return calculateTesterSalary(baseSalary);
        case "manager":
            return calculateManagerSalary(baseSalary);
        default:
            throw new Error("Invalid position!");
    }
};

function calculateDeveloperSalary(baseSalary) {
    return baseSalary >= 3000 ? baseSalary * 0.8 : baseSalary * 0.9;
}

function calculateDBASalary(baseSalary) {
    return baseSalary >= 2000 ? baseSalary * 0.75 : baseSalary * 0.85;
}

function calculateTesterSalary(baseSalary) {
    return baseSalary >= 2000 ? baseSalary * 0.75 : baseSalary * 0.85;
}

function calculateManagerSalary(baseSalary) {
    return baseSalary >= 5000 ? baseSalary * 0.7 : baseSalary * 0.8;
}
