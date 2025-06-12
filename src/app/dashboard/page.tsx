import { StatsCard } from "@/src/components/dashboard/stats-card"
import { ActivityList } from "@/src/components/dashboard/activity-list"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Package, ShoppingBag, Users, TrendingUp } from "lucide-react"
import { formatCurrency } from "@/src/lib/utils"

const DASHBOARD_STATS = [
  {
    title: "Total de Produtos",
    value: 120,
    description: "+5 adicionados esta semana",
    icon: <Package className="h-4 w-4" />,
  },
  {
    title: "Vendas do Mês",
    value: formatCurrency(12580),
    description: "+15% em relação ao mês anterior",
    icon: <ShoppingBag className="h-4 w-4" />,
  },
  {
    title: "Clientes Ativos",
    value: 573,
    description: "+24 novos clientes este mês",
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: "Taxa de Conversão",
    value: "3.2%",
    description: "+0.5% em relação ao mês anterior",
    icon: <TrendingUp className="h-4 w-4" />,
  },
]

const TOP_PRODUCTS = [
  { name: "Camiseta Básica", sales: 45, value: formatCurrency(2250) },
  { name: "Calça Jeans", sales: 38, value: formatCurrency(3420) },
  { name: "Tênis Esportivo", sales: 32, value: formatCurrency(6400) },
  { name: "Vestido Casual", sales: 28, value: formatCurrency(3920) },
  { name: "Boné Ajustável", sales: 25, value: formatCurrency(1250) },
]

const RECENT_ACTIVITIES = [
  { action: "Produto adicionado", item: "Camiseta Estampada", time: "Há 10 minutos" },
  { action: "Venda realizada", item: "#12345", time: "Há 30 minutos" },
  { action: "Estoque atualizado", item: "Calça Jeans", time: "Há 1 hora" },
  { action: "Produto editado", item: "Tênis Casual", time: "Há 2 horas" },
  { action: "Novo cliente", item: "Maria Silva", time: "Há 3 horas" },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Bem-vindo ao painel administrativo da sua loja.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {DASHBOARD_STATS.map((stat) => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            icon={stat.icon}
          />
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Produtos Mais Vendidos</CardTitle>
            <CardDescription>Top 5 produtos mais vendidos este mês</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {TOP_PRODUCTS.map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">{product.sales} vendas</p>
                  </div>
                  <div className="font-medium">{product.value}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
            <CardDescription>Últimas atividades no sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <ActivityList activities={RECENT_ACTIVITIES} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
