import type { LucideIcon } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  status: "Ativo" | "Inativo";
  image?: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  cep: string;
  totalPurchases: number;
  status: "Ativo" | "Inativo";
}

export interface Sale {
  id: string;
  customer: string;
  customerId: string;
  data: string;
  value: number;
  paymentWall: string;
  status: "Pendente" | "Concluído" | "Cancelado" | "Em processamento";
  items: SaleItem[];
}

export interface SaleItem {
  id: string;
  productId: string;
  productName: string;
  amount: number;
  price: number;
  total: number;
}

export interface DashboardStats {
  totalProducts: number;
  salesMonth: number;
  activeCustomers: number;
  conversationRate: number;
}

export interface NavItem {
  href: string;
  title: string;
  icon: LucideIcon;
}
