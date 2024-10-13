// lecture.model.ts
export interface Lecture {
  lectureName: string;
  date: string;  // Could be stored as a string or Date object
  time: string;  // e.g., "10:00 AM"
  topic: string; // The topic for the lecture
}
