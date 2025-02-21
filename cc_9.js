// Task 1 - Creating an employee class
class Employee {
    constructor(name, id, department, salary) {
        this.name = name; //Employee name
        this.id = id; //Employee ID
        this.department = department; //Employee department
        this.salary = salary; //Employee salary
    }; //constructor
    getDetails() {
        return 'Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}';
    }; //List employee details
    calculateAnnualSalary() {
        return this.salary * 12; //Calculate annaul salary
    };
};

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); //Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"

console.log(emp1.calculateAnnualSalary()); //Expected output: 60000
