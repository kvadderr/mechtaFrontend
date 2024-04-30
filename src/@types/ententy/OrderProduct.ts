import { Product } from "./Product";
import { Order } from "./Order";

export type OrderProduct = {
  id: string;
  order?: Order;
  order_id: string;
  product: Product;
  quantity: number;
}



