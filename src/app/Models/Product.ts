export interface productList {
  id: number;
  description: string;
  brand: string;
  gender: string;
  size?: number[];
  color?: string[];
  discountPrice?: number;
  is_in_inventory: boolean;
  name: string;
  price: number;
  category?: string;
  items_left: number;
  imageURL?: string;
  slug: string;
}
