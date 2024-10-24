import { Component } from '@angular/core';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.css'
})
export class BudgetListComponent {
// Initial list of budget items for the project
  budgetList: { item: string, category: string, estimatedCost: number, actualCost: number }[] = [
    { item: 'Laptops', category: 'Equipment', estimatedCost: 2000, actualCost: 1900 },
    { item: 'Software License', category: 'Software', estimatedCost: 500, actualCost: 450 },
    { item: 'Developer Salary', category: 'Labor', estimatedCost: 3000, actualCost: 3000 }
  ];

  // Initialize new budget item with default values
  newBudgetItem = { item: '', category: '', estimatedCost: 0, actualCost: 0 };

  // Add a new budget item to the list
  addBudgetItem() {
    if (this.newBudgetItem.item.trim() && this.newBudgetItem.category.trim() && this.newBudgetItem.estimatedCost > 0) {
      this.budgetList.push({
        item: this.newBudgetItem.item,
        category: this.newBudgetItem.category,
        estimatedCost: this.newBudgetItem.estimatedCost,
        actualCost: this.newBudgetItem.actualCost || 0
      });
      this.newBudgetItem = { item: '', category: '', estimatedCost: 0, actualCost: 0 };  // Reset the form
    } else {
      alert('Please fill in all the required fields.');
    }
  }

  // Remove a budget item by item name
  removeBudgetItem(item: string) {
    this.budgetList = this.budgetList.filter(budgetItem => budgetItem.item !== item);
  }
}
