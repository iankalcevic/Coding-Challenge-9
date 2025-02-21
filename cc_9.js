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
    //Task 4 addition
    calculateAnnualSalary() {
        return this.salary * 12 + this.calculateBonus();
    }; //Payroll system
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
    //Task 4 addition
    calculateTotalPayroll() {
        return this.employees.reduce((total,employee) => {
            return total + employee.calculateAnnualSalary(); //Total payroll
        }, 0); //Payroll system
    };
};

const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();
//Expected output: 
//"Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"

// Task 5 - Implemting Promotions
promoteToManager (employee, teamSize) {
    const index = this.employee.indexOf(employee);
    if (index !== -1)
        this.employees[index] = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize);
    //Promoted to manager
};

company.promoteToManager(emp1, 3);
company.listEmployees();
// Expected output: "Manager: Alice Johnson, ID: 101, Department: Sales, Salary: $5000, Team Size: 3"
//"Manager: John Smith, ID: 201, Department: IT, Salary, $8000, Team Size: 5"

//Task 4 log
console.log(company.calculateTotalPayroll()); //Expected output: 165600
