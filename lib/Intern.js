// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const fs = require("fs");
const inquirer = require("inquirer");
let Employee = require("./Employee");

class Intern extends Employee{
    constructor(firstname,lastname,id,email,school){
        super(firstname,lastname,id,email);
        this.school = school;
    };
    getSchool() {
        return this.school;
    };
    getRole() { 
        return 'Intern';
    };
};

module.exports = Intern;
