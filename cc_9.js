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

// Task 2 - Creating a manager class 
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary); //Employee constructor
        this.teamSize = teamSize; //Team size 
    }; //constructor
    getDetails() {
        return 'Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}';
    }; //List manager details
    calculateBonus() {
        return this.salary * 12 * 0.10; //Manager bonus
    }; 
};

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails()); //Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

console.log(mgr1.calculateBonus()); //Expected output: 9600

// Task 3 - Creating a Company Class
class Company {
    constructor(name) {
        this.name = name; //Company name
        this.employees = [] //Company employees
    }; //constructor
    addEmployee(employee) {
        this.employees.push(employee); //Add employees to company
    };
};

const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();
//Expected output: 
//"Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
//"Manager: John Smith, ID: 201, Department: IT, Salary, $8000, Team Size: 5"
