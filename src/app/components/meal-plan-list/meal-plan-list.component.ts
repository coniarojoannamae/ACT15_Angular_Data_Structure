import { Component, OnInit } from '@angular/core';
import { MealPlanService } from './meal-plan.service';

@Component({
  selector: 'app-meal-plan-list',
  templateUrl: './meal-plan-list.component.html',
  styleUrls: ['./meal-plan-list.component.css']
})
export class MealPlanListComponent implements OnInit {
  mealPlanList: { day: string, mealType: string, mealDescription: string }[] = [];
  newMeal = { day: '', mealType: '', mealDescription: '' };

  constructor(private mealPlanService: MealPlanService) {}

  ngOnInit() {
    this.mealPlanList = this.mealPlanService.getMealPlans();
  }

  addMeal() {
    if (this.newMeal.day.trim() && this.newMeal.mealType.trim() && this.newMeal.mealDescription.trim()) {
      this.mealPlanService.addMeal({
        day: this.newMeal.day,
        mealType: this.newMeal.mealType,
        mealDescription: this.newMeal.mealDescription
      });
      this.newMeal = { day: '', mealType: '', mealDescription: '' }; // Reset the form
    } else {
      alert('Please fill in all the required fields.');
    }
    this.mealPlanList = this.mealPlanService.getMealPlans(); // Refresh the list
  }

  removeMeal(mealDescription: string) {
    this.mealPlanService.removeMeal(mealDescription);
    this.mealPlanList = this.mealPlanService.getMealPlans(); // Refresh the list
  }
}
