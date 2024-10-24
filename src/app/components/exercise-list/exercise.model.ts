// exercise.model.ts
export interface Exercise {
  name: string;        // Exercise name
  type: string;        // Cardio, Strength, Flexibility, etc.
  duration: string;    // Duration per set (optional for strength exercises)
  sets: number;        // Number of sets
  reps: number;        // Number of repetitions per set
}
