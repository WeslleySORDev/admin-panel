import type React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"
import { Card } from "@/src/components/ui/card"

interface Column<T> {
  key: keyof T | string
  header: string
  cell?: (item: T) => React.ReactNode
  className?: string
}

interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
}

export function DataTable<T extends Record<string, any>>({ data, columns }: DataTableProps<T>) {
  return (
    <Card>
      <div className="relative w-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={String(column.key)} className={column.className}>
                  {column.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={item.id || index}>
                {columns.map((column) => (
                  <TableCell key={String(column.key)} className={column.className}>
                    {column.cell ? column.cell(item) : item[column.key as keyof T]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  )
}
