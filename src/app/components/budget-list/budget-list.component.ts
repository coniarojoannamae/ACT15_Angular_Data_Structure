import { Component, OnInit } from '@angular/core';
import { BudgetService } from './budget.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {
  budgetList: { item: string, category: string, estimatedCost: number, actualCost: number }[] = [];
  newBudgetItem = { item: '', category: '', estimatedCost: 0, actualCost: 0 };

  constructor(private budgetService: BudgetService) {}

  ngOnInit() {
    this.budgetList = this.budgetService.getBudgetList();
  }

  addBudgetItem() {
    if (this.newBudgetItem.item.trim() && this.newBudgetItem.category.trim() && this.newBudgetItem.estimatedCost > 0) {
      this.budgetService.addBudgetItem({
        item: this.newBudgetItem.item,
        category: this.newBudgetItem.category,
        estimatedCost: this.newBudgetItem.estimatedCost,
        actualCost: this.newBudgetItem.actualCost || 0
      });
      this.newBudgetItem = { item: '', category: '', estimatedCost: 0, actualCost: 0 }; // Reset the form
      this.budgetList = this.budgetService.getBudgetList(); // Refresh the list
    } else {
      alert('Please fill in all the required fields.');
    }
  }

  removeBudgetItem(item: string) {
    this.budgetService.removeBudgetItem(item);
    this.budgetList = this.budgetService.getBudgetList(); // Refresh the list
  }
}
