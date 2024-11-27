import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private exerciseList: { name: string, type: string, duration: string, sets: number, reps: number }[] = [
    { name: 'Push-ups', type: 'Strength', duration: 'N/A', sets: 3, reps: 15 },
    { name: 'Running', type: 'Cardio', duration: '20 mins', sets: 1, reps: 1 },
    { name: 'Squats', type: 'Strength', duration: 'N/A', sets: 3, reps: 20 }
  ];

  // Retrieve the list of exercises
  getExercises() {
    return this.exerciseList;
  }

  // Add a new exercise to the list
  addExercise(exercise: { name: string, type: string, duration: string, sets: number, reps: number }) {
    this.exerciseList.push(exercise);
  }

  // Remove an exercise by name
  removeExercise(name: string) {
    this.exerciseList = this.exerciseList.filter(exercise => exercise.name !== name);
  }
}
