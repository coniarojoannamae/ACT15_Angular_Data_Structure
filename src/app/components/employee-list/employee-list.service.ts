import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: Employee[] = [
    { id: 1, name: 'Alice Johnson', position: 'Software Engineer', department: 'IT' },
    { id: 2, name: 'Bob Smith', position: 'HR Manager', department: 'HR' },
  ];

  getEmployees(): Employee[] {
    return [...this.employees]; // Return a copy to prevent direct mutation
  }

  addEmployee(employee: Employee): void {
    const id = this.employees.length > 0 ? this.employees[this.employees.length - 1].id + 1 : 1;
    this.employees.push({ ...employee, id });
  }

  removeEmployee(id: number): void {
    this.employees = this.employees.filter(emp => emp.id !== id);
  }
}
