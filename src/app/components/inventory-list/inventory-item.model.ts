// inventory-item.model.ts
export interface InventoryItem {
  itemName: string;
  quantity: number;
  price: number;
  category: string;  // e.g., "Electronics", "Groceries", etc.
}
