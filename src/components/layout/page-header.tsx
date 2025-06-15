import type React from "react"
interface PageHeaderProps {
  title: string
  description?: string
  children?: React.ReactNode
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-center md:text-left">{title}</h1>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      {children && <div className="flex flex-col gap-2 w-full md:flex-row">{children}</div>}
    </div>
  )
}
