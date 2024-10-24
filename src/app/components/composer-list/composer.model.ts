// composer.model.ts
export interface Composer {
  name: string;
  born: string;  // Year or Date format
  died: string;  // Optional (can be left blank if alive)
  nationality: string;
  famousWorks: string[];  // List of famous works
}
