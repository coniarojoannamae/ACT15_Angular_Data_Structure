import { Component } from '@angular/core';

@Component({
  selector: 'app-meal-plan-list',
  templateUrl: './meal-plan-list.component.html',
  styleUrl: './meal-plan-list.component.css'
})
export class MealPlanListComponent {
  // Initial list of meals in the weekly plan
  mealPlanList: { day: string, mealType: string, mealDescription: string }[] = [
    { day: 'Monday', mealType: 'Breakfast', mealDescription: 'Oatmeal with fruits' },
    { day: 'Monday', mealType: 'Lunch', mealDescription: 'Grilled chicken salad' },
    { day: 'Monday', mealType: 'Dinner', mealDescription: 'Spaghetti with garlic bread' }
  ];

  // Initialize new meal with default values
  newMeal = { day: '', mealType: '', mealDescription: '' };

  // Add a new meal to the weekly plan
  addMeal() {
    if (this.newMeal.day.trim() && this.newMeal.mealType.trim() && this.newMeal.mealDescription.trim()) {
      this.mealPlanList.push({
        day: this.newMeal.day,
        mealType: this.newMeal.mealType,
        mealDescription: this.newMeal.mealDescription
      });
      this.newMeal = { day: '', mealType: '', mealDescription: '' };  // Reset the form
    } else {
      alert('Please fill in all the required fields.');
    }
  }

  // Remove a meal by description
  removeMeal(mealDescription: string) {
    this.mealPlanList = this.mealPlanList.filter(meal => meal.mealDescription !== mealDescription);
  }
}
