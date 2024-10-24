// artist.model.ts
export interface Artist {
  name: string;
  born: string;  // Can be formatted as "Year" or "Date"
  died: string;  // Optional (can be left blank if still alive)
  nationality: string;
  famousWorks: string[];  // List of famous works
}
