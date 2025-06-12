import { Badge } from "@/components/ui/badge"

interface StatusBadgeProps {
  status: string
  variant?: "default" | "secondary" | "destructive" | "outline"
}

export function StatusBadge({ status, variant }: StatusBadgeProps) {
  const getVariant = () => {
    if (variant) return variant

    switch (status) {
      case "Ativo":
      case "Concluído":
        return "default"
      case "Pendente":
        return "outline"
      case "Cancelado":
      case "Inativo":
        return "destructive"
      case "Em processamento":
        return "secondary"
      default:
        return "secondary"
    }
  }

  return <Badge variant={getVariant()}>{status}</Badge>
}
