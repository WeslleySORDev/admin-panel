import type { LucideIcon } from "lucide-react"

export interface Produto {
  id: string
  nome: string
  descricao: string
  preco: number
  categoria: string
  estoque: number
  status: "Ativo" | "Inativo"
  imagem?: string
}

export interface Cliente {
  id: string
  nome: string
  email: string
  telefone: string
  endereco: string
  cidade: string
  estado: string
  cep: string
  totalCompras: number
  status: "Ativo" | "Inativo"
}

export interface Venda {
  id: string
  cliente: string
  clienteId: string
  data: string
  valor: number
  formaPagamento: string
  status: "Pendente" | "Concluído" | "Cancelado" | "Em processamento"
  itens: VendaItem[]
}

export interface VendaItem {
  id: string
  produtoId: string
  produtoNome: string
  quantidade: number
  precoUnitario: number
  total: number
}

export interface DashboardStats {
  totalProdutos: number
  vendasMes: number
  clientesAtivos: number
  taxaConversao: number
}

export interface NavItem {
  href: string
  title: string
  icon: LucideIcon
}
