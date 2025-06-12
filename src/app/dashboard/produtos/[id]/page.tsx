import { notFound } from "next/navigation"
import { getProduto } from "../actions"
import ProdutoForm from "../produto-form"

interface ProdutoEditPageProps {
  params: {
    id: string
  }
}

export default async function ProdutoEditPage({ params }: ProdutoEditPageProps) {
  const produto = await getProduto(params.id)

  if (!produto) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Editar Produto</h1>
        <p className="text-muted-foreground">Atualize as informações do produto.</p>
      </div>

      <ProdutoForm produto={produto} />
    </div>
  )
}
