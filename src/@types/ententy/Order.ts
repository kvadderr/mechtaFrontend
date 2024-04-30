import { OrderStatus } from "../const/OrderStatus";
import { OrderProduct } from "./OrderProduct";

export type Order = {
  id: string;
  createdAt: Date;
  promocode?: string;
  discount?: number;
  user_id: string;
  orderProducts: OrderProduct[];
  price: number;
  status: OrderStatus
}