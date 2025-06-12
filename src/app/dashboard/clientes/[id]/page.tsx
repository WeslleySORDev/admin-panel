import { notFound } from "next/navigation"
import { getCliente } from "../actions"
import ClienteForm from "../cliente-form"

interface ClienteEditPageProps {
  params: {
    id: string
  }
}

export default async function ClienteEditPage({ params }: ClienteEditPageProps) {
  const cliente = await getCliente(params.id)

  if (!cliente) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Editar Cliente</h1>
        <p className="text-muted-foreground">Atualize as informações do cliente.</p>
      </div>

      <ClienteForm cliente={cliente} />
    </div>
  )
}
