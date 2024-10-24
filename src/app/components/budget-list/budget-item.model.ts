// budget-item.model.ts
export interface BudgetItem {
  item: string;             // Item name
  category: string;         // Category of the item (e.g., equipment, labor)
  estimatedCost: number;    // Estimated cost of the item
  actualCost: number;       // Actual cost of the item (can be updated later)
}
