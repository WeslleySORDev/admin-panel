import ProdutoForm from "./components/produto-form"

export default function NovoProdutoPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Novo Produto</h1>
        <p className="text-muted-foreground">Adicione um novo produto à sua loja.</p>
      </div>
      <ProdutoForm />
    </div>
  )
}
