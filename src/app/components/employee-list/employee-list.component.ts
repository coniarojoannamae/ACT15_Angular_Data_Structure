import { Component } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees: Employee[] = [
    { id: 1, name: 'Alice Johnson', position: 'Software Engineer', department: 'IT' },
    { id: 2, name: 'Bob Smith', position: 'HR Manager', department: 'HR' }
  ];

  newEmployee: Employee = { id: 0, name: '', position: '', department: '' };

  addEmployee() {
    const id = this.employees.length > 0 ? this.employees[this.employees.length - 1].id + 1 : 1;
    const employee = { ...this.newEmployee, id };
    this.employees.push(employee);
    this.newEmployee = { id: 0, name: '', position: '', department: '' }; // Reset the form
  }

  removeEmployee(id: number) {
    this.employees = this.employees.filter(employee => employee.id !== id);
  }
}
