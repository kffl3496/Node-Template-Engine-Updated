// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee1 = require('../lib/Employee1.js');

class Intern1 extends Employee1 {
    constructor(school) {
        super();
        this.school = "UCLA";
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern1";
    }
}

module.exports = Intern1;
