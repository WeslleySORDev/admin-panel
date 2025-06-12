import { CardFooter } from "@/src/components/ui/card"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getVenda } from "../actions"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"
import { StatusBadge } from "@/src/components/ui/status-badge"
import { StatusUpdater } from "@/src/components/vendas/status-updater"
import { ArrowLeft, Printer } from "lucide-react"
import { formatCurrency } from "@/src/lib/utils"

interface VendaDetalhesPageProps {
  params: {
    id: string
  }
}

export default async function VendaDetalhesPage({ params }: VendaDetalhesPageProps) {
  const venda = await getVenda(params.id)

  if (!venda) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/dashboard/vendas">
            <Button variant="ghost" size="sm" className="mb-2">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Vendas
            </Button>
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">Pedido #{venda.id}</h1>
          <p className="text-muted-foreground">Detalhes da venda realizada em {venda.data}.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" /> Imprimir
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Informações do Pedido</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Número do Pedido</p>
                <p className="font-medium">#{venda.id}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Data</p>
                <p className="font-medium">{venda.data}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Forma de Pagamento</p>
                <p className="font-medium">{venda.formaPagamento}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Status</p>
                <StatusBadge status={venda.status} />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <StatusUpdater venda={venda} />
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Informações do Cliente</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Nome</p>
              <p className="font-medium">{venda.cliente}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">ID do Cliente</p>
              <p className="font-medium">#{venda.clienteId}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Email</p>
              <p className="font-medium">{venda.cliente.toLowerCase().replace(" ", ".") + "@email.com"}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Telefone</p>
              <p className="font-medium">
                (11) 9{Math.floor(Math.random() * 9000) + 1000}-{Math.floor(Math.random() * 9000) + 1000}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Itens do Pedido</CardTitle>
          <CardDescription>Lista de produtos incluídos nesta venda.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead className="text-right">Preço Unit.</TableHead>
                <TableHead className="text-right">Quantidade</TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {venda.itens.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.produtoNome}</TableCell>
                  <TableCell className="text-right">{formatCurrency(item.precoUnitario)}</TableCell>
                  <TableCell className="text-right">{item.quantidade}</TableCell>
                  <TableCell className="text-right">{formatCurrency(item.total)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-end">
          <div className="space-y-2 text-right">
            <div className="text-sm text-muted-foreground">Subtotal: {formatCurrency(venda.valor)}</div>
            <div className="text-sm text-muted-foreground">Frete: {formatCurrency(0)}</div>
            <div className="text-lg font-bold">Total: {formatCurrency(venda.valor)}</div>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
