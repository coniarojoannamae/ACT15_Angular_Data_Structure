import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  private budgetList: { item: string, category: string, estimatedCost: number, actualCost: number }[] = [
    { item: 'Laptops', category: 'Equipment', estimatedCost: 2000, actualCost: 1900 },
    { item: 'Software License', category: 'Software', estimatedCost: 500, actualCost: 450 },
    { item: 'Developer Salary', category: 'Labor', estimatedCost: 3000, actualCost: 3000 },
  ];

  // Retrieve the list of budget items
  getBudgetList() {
    return this.budgetList;
  }

  // Add a new budget item
  addBudgetItem(budgetItem: { item: string, category: string, estimatedCost: number, actualCost: number }) {
    this.budgetList.push(budgetItem);
  }

  // Remove a budget item by name
  removeBudgetItem(item: string) {
    this.budgetList = this.budgetList.filter(budget => budget.item !== item);
  }
}
