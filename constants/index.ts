import { LayoutDashboard, Package, ShoppingBag, Users, Settings } from "lucide-react"

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
]

export const CATEGORIAS_PRODUTO = ["Vestuário", "Calçados", "Acessórios", "Eletrônicos", "Casa", "Esportes"]

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
]

export const FORMAS_PAGAMENTO = ["Cartão de Crédito", "Cartão de Débito", "PIX", "Boleto", "Dinheiro"]

export const STATUS_VENDA = ["Pendente", "Em processamento", "Concluído", "Cancelado"]
