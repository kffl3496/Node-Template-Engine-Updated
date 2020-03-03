// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee1 = require('../lib/Employee1');

class Engineer1 extends Employee1 {
    constructor(github) {
        super();
        this.github = "GitHubUser";
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getGithub() {
        return this.github;
    }
    
    getRole() {
        return "Engineer1";
    }
}

module.exports = Engineer1;