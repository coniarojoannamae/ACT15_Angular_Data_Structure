import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})
export class ExerciseListComponent {
  // Initial list of exercises for the workout routine
  exerciseList: { name: string, type: string, duration: string, sets: number, reps: number }[] = [
    { name: 'Push-ups', type: 'Strength', duration: 'N/A', sets: 3, reps: 15 },
    { name: 'Running', type: 'Cardio', duration: '20 mins', sets: 1, reps: 1 },
    { name: 'Squats', type: 'Strength', duration: 'N/A', sets: 3, reps: 20 }
  ];

  // Initialize new exercise with default values
  newExercise = { name: '', type: '', duration: '', sets: 0, reps: 0 };

  // Add a new exercise to the list
  addExercise() {
    if (this.newExercise.name.trim() && this.newExercise.type.trim() && this.newExercise.sets > 0 && this.newExercise.reps >= 0) {
      this.exerciseList.push({
        name: this.newExercise.name,
        type: this.newExercise.type,
        duration: this.newExercise.duration || 'N/A',  // Duration can be optional for strength exercises
        sets: this.newExercise.sets,
        reps: this.newExercise.reps
      });
      this.newExercise = { name: '', type: '', duration: '', sets: 0, reps: 0 };  // Reset the form
    } else {
      alert('Please fill in all the required fields.');
    }
  }

  // Remove an exercise by name
  removeExercise(name: string) {
    this.exerciseList = this.exerciseList.filter(exercise => exercise.name !== name);
  }
}
