import { Component, OnInit } from '@angular/core';
import { ExerciseService } from './exercise.service';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {
  exerciseList: { name: string, type: string, duration: string, sets: number, reps: number }[] = [];
  newExercise = { name: '', type: '', duration: '', sets: 0, reps: 0 };

  constructor(private exerciseService: ExerciseService) {}

  ngOnInit() {
    this.exerciseList = this.exerciseService.getExercises();
  }

  addExercise() {
    if (this.newExercise.name.trim() && this.newExercise.type.trim() && this.newExercise.sets > 0 && this.newExercise.reps >= 0) {
      this.exerciseService.addExercise({
        name: this.newExercise.name,
        type: this.newExercise.type,
        duration: this.newExercise.duration || 'N/A',  // Duration is optional for some exercises
        sets: this.newExercise.sets,
        reps: this.newExercise.reps
      });
      this.newExercise = { name: '', type: '', duration: '', sets: 0, reps: 0 }; // Reset the form
    } else {
      alert('Please fill in all the required fields.');
    }
    this.exerciseList = this.exerciseService.getExercises(); // Refresh the list
  }

  removeExercise(name: string) {
    this.exerciseService.removeExercise(name);
    this.exerciseList = this.exerciseService.getExercises(); // Refresh the list
  }
}
