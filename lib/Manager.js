// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const fs = require("fs");
const inquirer = require("inquirer");
let Employee = require("./Employee");

class Manager extends Employee {
    constructor(firstname,lastname,id,email,office){
        super(firstname,lastname,id,email);
        this.office = office;
    };
    getOfficeNumber() {
        return this.office;  
    };
    getRole() {
        return 'Manager';
    }; 
};

module.exports = Manager;