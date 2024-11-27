import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MealPlanService {
  private mealPlanList: { day: string, mealType: string, mealDescription: string }[] = [
    { day: 'Monday', mealType: 'Breakfast', mealDescription: 'Oatmeal with fruits' },
    { day: 'Monday', mealType: 'Lunch', mealDescription: 'Grilled chicken salad' },
    { day: 'Monday', mealType: 'Dinner', mealDescription: 'Spaghetti with garlic bread' }
  ];

  // Retrieve the list of meals
  getMealPlans() {
    return this.mealPlanList;
  }

  // Add a new meal to the plan
  addMeal(meal: { day: string, mealType: string, mealDescription: string }) {
    this.mealPlanList.push(meal);
  }

  // Remove a meal by description
  removeMeal(mealDescription: string) {
    this.mealPlanList = this.mealPlanList.filter(meal => meal.mealDescription !== mealDescription);
  }
}
