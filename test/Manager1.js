// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee1 = require('../lib/Employee1.js');

class Manager1 extends Employee1 {
    constructor(officeNumber) {
        super();
        this.officeNumber = 100;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager1";
    }
}

module.exports = Manager1;
