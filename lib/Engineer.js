// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const fs = require("fs");
const inquirer = require("inquirer");
let Employee = require("./Employee");

class Engineer extends Employee{
    constructor(firstname,lastname,id,email,github){
        super(firstname,lastname,id,email);
        this.github = github;
    };
    getGithub() {
        return this.github;
    };
    getRole() { 
        return 'Engineer';
    };
}    

module.exports = Engineer;