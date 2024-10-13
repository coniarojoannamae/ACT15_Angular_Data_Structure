// product.model.ts
export interface Product {
  name: string;
  price: number | null; // Allow price to be null
  category: string;
}
