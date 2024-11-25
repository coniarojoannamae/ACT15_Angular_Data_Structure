import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { EmployeeService } from './employee-list.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  newEmployee: Employee = { id: 0, name: '', position: '', department: '' };

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employees = this.employeeService.getEmployees();
  }

  addEmployee(): void {
    this.employeeService.addEmployee(this.newEmployee);
    this.loadEmployees(); // Refresh the list
    this.newEmployee = { id: 0, name: '', position: '', department: '' }; // Reset the form
  }

  removeEmployee(id: number): void {
    this.employeeService.removeEmployee(id);
    this.loadEmployees(); // Refresh the list
  }
}