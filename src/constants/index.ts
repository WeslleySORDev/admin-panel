import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  Settings,
} from "lucide-react";
import { Product } from "../types";

export const DEFAULT_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Suvinil Fosco Completo Branco",
    description:
      "Tinta acrílica premium com acabamento fosco, ideal para disfarçar imperfeições e proporcionar um toque suave às paredes internas e externas.",
    price: 195.0,
    category: "Tintas Imobiliárias",
    stock: 70,
    status: "Ativo",
    image: "/suvinil-fosco-completo-branco.jpg",
  },
  {
    id: "2",
    name: "Suvinil Esmalte Cor & Proteção Tabaco",
    description:
      "Esmalte sintético base água para madeiras e metais, com alta durabilidade e secagem rápida.",
    price: 85.5,
    category: "Tintas para Madeira e Metal",
    stock: 50,
    status: "Ativo",
    image: "/suvinil-esmalte-cor-protecao-tabaco.jpg",
  },
  {
    id: "3",
    name: "Suvinil Toque de Brilho Gelo",
    description:
      "Tinta acrílica lavável com um suave toque acetinado, perfeita para quem busca elegância e praticidade em ambientes internos.",
    price: 230.0,
    category: "Tintas Especiais",
    stock: 55,
    status: "Ativo",
    image: "/suvinil-toque-de-brilho-gelo.jpg",
  },
  {
    id: "4",
    name: "Suvinil Massa Corrida",
    description:
      "Massa corrida para nivelar e corrigir imperfeições em superfícies internas de alvenaria e gesso.",
    price: 55.0,
    category: "Complementos para Pintura",
    stock: 120,
    status: "Ativo",
    image: "/suvinil-massa-corrida.jpg",
  },
  {
    id: "5",
    name: "Suvinil Verniz Proteção Total Brilhante",
    description:
      "Verniz marítimo de alta performance para madeiras, oferece proteção contra sol, chuva e umidade.",
    price: 110.0,
    category: "Vernizes e Stains",
    stock: 40,
    status: "Ativo",
    image: "/suvinil-verniz-protecao-total-brilhante.jpg",
  },
];

export const NAV_ITEMS = [
  {
    href: "/dashboard",
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/dashboard/produtos",
    title: "Produtos",
    icon: Package,
  },
  {
    href: "/dashboard/vendas",
    title: "Vendas",
    icon: ShoppingBag,
  },
  {
    href: "/dashboard/clientes",
    title: "Clientes",
    icon: Users,
  },
  {
    href: "/dashboard/configuracoes",
    title: "Configurações",
    icon: Settings,
  },
];

export const CATEGORIAS_PRODUTO = [
  "Imobiliario",
  "Automotivo",
  "Geral",
] as const;

export const statusOptions = [
  { value: "Ativo", label: "Ativo" },
  { value: "Inativo", label: "Inativo" },
] as const;

export const ESTADOS_BRASIL = [
  { value: "AC", label: "Acre" },
  { value: "AL", label: "Alagoas" },
  { value: "AP", label: "Amapá" },
  { value: "AM", label: "Amazonas" },
  { value: "BA", label: "Bahia" },
  { value: "CE", label: "Ceará" },
  { value: "DF", label: "Distrito Federal" },
  { value: "ES", label: "Espírito Santo" },
  { value: "GO", label: "Goiás" },
  { value: "MA", label: "Maranhão" },
  { value: "MT", label: "Mato Grosso" },
  { value: "MS", label: "Mato Grosso do Sul" },
  { value: "MG", label: "Minas Gerais" },
  { value: "PA", label: "Pará" },
  { value: "PB", label: "Paraíba" },
  { value: "PR", label: "Paraná" },
  { value: "PE", label: "Pernambuco" },
  { value: "PI", label: "Piauí" },
  { value: "RJ", label: "Rio de Janeiro" },
  { value: "RN", label: "Rio Grande do Norte" },
  { value: "RS", label: "Rio Grande do Sul" },
  { value: "RO", label: "Rondônia" },
  { value: "RR", label: "Roraima" },
  { value: "SC", label: "Santa Catarina" },
  { value: "SP", label: "São Paulo" },
  { value: "SE", label: "Sergipe" },
  { value: "TO", label: "Tocantins" },
];

export const FORMAS_PAGAMENTO = [
  "Cartão de Crédito",
  "Cartão de Débito",
  "PIX",
  "Boleto",
  "Dinheiro",
];

export const STATUS_VENDA = [
  "Pendente",
  "Em processamento",
  "Concluído",
  "Cancelado",
];
