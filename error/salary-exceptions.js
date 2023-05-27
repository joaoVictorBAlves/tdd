class PositionEmptyError extends Error {
    constructor() {
        super("Position is empty!");
        this.name = "PositionEmptyError";
    }
}

class SalaryEmptyError extends Error {
    constructor() {
        super("Salary is empty!");
        this.name = "SalaryEmptyError";
    }
}

class NegativeSalaryError extends Error {
    constructor() {
        super("Negative salary is invalid!");
        this.name = "NegativeSalaryError";
    }
}

class InvalidSalaryError extends Error {
    constructor() {
        super("Invalid salary!");
        this.name = "InvalidSalaryError";
    }
}

module.exports = {
    PositionEmptyError,
    SalaryEmptyError,
    NegativeSalaryError,
    InvalidSalaryError,
};