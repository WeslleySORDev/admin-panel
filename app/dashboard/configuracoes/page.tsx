"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/hooks/use-toast"

export default function ConfiguracoesPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulando um pequeno atraso para parecer uma operação de banco de dados
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Configurações salvas",
      description: "Suas configurações foram atualizadas com sucesso.",
    })

    setIsSubmitting(false)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Configurações</h1>
        <p className="text-muted-foreground">Gerencie as configurações da sua loja.</p>
      </div>

      <Tabs defaultValue="geral">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="geral">Geral</TabsTrigger>
          <TabsTrigger value="loja">Loja</TabsTrigger>
          <TabsTrigger value="pagamentos">Pagamentos</TabsTrigger>
          <TabsTrigger value="integracao">Integração</TabsTrigger>
        </TabsList>

        <TabsContent value="geral" className="space-y-4 mt-4">
          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>Informações Gerais</CardTitle>
                <CardDescription>Configure as informações básicas da sua loja.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nome-loja">Nome da Loja</Label>
                  <Input id="nome-loja" defaultValue="Minha Loja" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="descricao-loja">Descrição da Loja</Label>
                  <Textarea
                    id="descricao-loja"
                    defaultValue="Loja especializada em produtos de qualidade para todos os gostos."
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email-contato">Email de Contato</Label>
                    <Input id="email-contato" type="email" defaultValue="contato@minhaloja.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone-contato">Telefone de Contato</Label>
                    <Input id="telefone-contato" defaultValue="(11) 1234-5678" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endereco">Endereço Físico</Label>
                  <Input id="endereco" defaultValue="Rua Exemplo, 123 - Centro - São Paulo/SP" />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Salvando..." : "Salvar Alterações"}
                </Button>
              </CardFooter>
            </Card>
          </form>
        </TabsContent>

        <TabsContent value="loja" className="space-y-4 mt-4">
          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>Configurações da Loja</CardTitle>
                <CardDescription>Configure as opções de exibição e funcionamento da loja.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Exibição de Produtos</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="produtos-por-pagina">Produtos por Página</Label>
                      <Select defaultValue="12">
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="8">8 produtos</SelectItem>
                          <SelectItem value="12">12 produtos</SelectItem>
                          <SelectItem value="16">16 produtos</SelectItem>
                          <SelectItem value="24">24 produtos</SelectItem>
                          <SelectItem value="36">36 produtos</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ordenacao-padrao">Ordenação Padrão</Label>
                      <Select defaultValue="recentes">
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="recentes">Mais recentes</SelectItem>
                          <SelectItem value="populares">Mais populares</SelectItem>
                          <SelectItem value="preco-asc">Preço: menor para maior</SelectItem>
                          <SelectItem value="preco-desc">Preço: maior para menor</SelectItem>
                          <SelectItem value="nome-asc">Nome: A-Z</SelectItem>
                          <SelectItem value="nome-desc">Nome: Z-A</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Estoque</h3>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="mostrar-estoque">Mostrar quantidade em estoque</Label>
                      <p className="text-sm text-muted-foreground">
                        Exibe a quantidade disponível em estoque na página do produto
                      </p>
                    </div>
                    <Switch id="mostrar-estoque" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="alerta-estoque-baixo">Alerta de estoque baixo</Label>
                      <p className="text-sm text-muted-foreground">
                        Receba notificações quando o estoque estiver abaixo do limite
                      </p>
                    </div>
                    <Switch id="alerta-estoque-baixo" defaultChecked />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="limite-estoque-baixo">Limite de estoque baixo</Label>
                    <Input id="limite-estoque-baixo" type="number" defaultValue="5" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Salvando..." : "Salvar Alterações"}
                </Button>
              </CardFooter>
            </Card>
          </form>
        </TabsContent>

        <TabsContent value="pagamentos" className="space-y-4 mt-4">
          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>Configurações de Pagamento</CardTitle>
                <CardDescription>Configure as opções de pagamento da sua loja.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Métodos de Pagamento</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Cartão de Crédito</Label>
                        <p className="text-sm text-muted-foreground">Aceitar pagamentos com cartão de crédito</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Cartão de Débito</Label>
                        <p className="text-sm text-muted-foreground">Aceitar pagamentos com cartão de débito</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>PIX</Label>
                        <p className="text-sm text-muted-foreground">Aceitar pagamentos via PIX</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Boleto</Label>
                        <p className="text-sm text-muted-foreground">Aceitar pagamentos via boleto bancário</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Dinheiro (na loja física)</Label>
                        <p className="text-sm text-muted-foreground">Aceitar pagamentos em dinheiro na loja física</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Configurações de Gateway</h3>
                  <div className="space-y-2">
                    <Label htmlFor="gateway-pagamento">Gateway de Pagamento</Label>
                    <Select defaultValue="mercadopago">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mercadopago">Mercado Pago</SelectItem>
                        <SelectItem value="pagseguro">PagSeguro</SelectItem>
                        <SelectItem value="paypal">PayPal</SelectItem>
                        <SelectItem value="stripe">Stripe</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="chave-api">Chave da API</Label>
                    <Input id="chave-api" type="password" defaultValue="sk_test_1234567890" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Salvando..." : "Salvar Alterações"}
                </Button>
              </CardFooter>
            </Card>
          </form>
        </TabsContent>

        <TabsContent value="integracao" className="space-y-4 mt-4">
          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>Integração com Site</CardTitle>
                <CardDescription>Configure a integração com o site principal da loja.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">API</h3>
                  <div className="space-y-2">
                    <Label htmlFor="api-url">URL da API</Label>
                    <Input id="api-url" defaultValue="https://api.minhaloja.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="api-key">Chave da API</Label>
                    <div className="flex gap-2">
                      <Input id="api-key" type="password" defaultValue="api_key_1234567890" className="flex-1" />
                      <Button variant="outline" type="button" onClick={() => alert("Chave regenerada com sucesso!")}>
                        Regenerar
                      </Button>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Webhooks</h3>
                  <div className="space-y-2">
                    <Label htmlFor="webhook-url">URL do Webhook</Label>
                    <Input id="webhook-url" defaultValue="https://minhaloja.com/webhook" />
                  </div>
                  <div className="space-y-2">
                    <Label>Eventos</Label>
                    <div className="grid gap-2">
                      <div className="flex items-center space-x-2">
                        <Switch id="webhook-produtos" defaultChecked />
                        <Label htmlFor="webhook-produtos">Atualização de produtos</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="webhook-pedidos" defaultChecked />
                        <Label htmlFor="webhook-pedidos">Novos pedidos</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="webhook-estoque" defaultChecked />
                        <Label htmlFor="webhook-estoque">Alterações de estoque</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="webhook-clientes" defaultChecked />
                        <Label htmlFor="webhook-clientes">Novos clientes</Label>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Sincronização</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Sincronização automática</Label>
                        <p className="text-sm text-muted-foreground">
                          Sincronizar automaticamente alterações com o site principal
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="intervalo-sincronizacao">Intervalo de sincronização</Label>
                    <Select defaultValue="5">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 minuto</SelectItem>
                        <SelectItem value="5">5 minutos</SelectItem>
                        <SelectItem value="15">15 minutos</SelectItem>
                        <SelectItem value="30">30 minutos</SelectItem>
                        <SelectItem value="60">1 hora</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      toast({
                        title: "Sincronização iniciada",
                        description: "A sincronização manual foi iniciada com sucesso.",
                      })
                    }}
                  >
                    Sincronizar Agora
                  </Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Salvando..." : "Salvar Alterações"}
                </Button>
              </CardFooter>
            </Card>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  )
}
