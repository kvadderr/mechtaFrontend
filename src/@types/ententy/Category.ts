import { Product } from "./Product";

export type Category = {
  id: string;
  name: string;
  parent_id: null | string;
  products: Product[]
  children: Category[];
};
