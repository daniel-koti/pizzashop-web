import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from './ui/button'

interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
}

export function Pagination({
  pageIndex,
  perPage,
  totalCount,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} item(s)
      </span>
      <div className="flex items-center gap-6 lg:gap-8">
        <div className="flex text-sm font-medium">
          Página {pageIndex + 1} de {pages}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="size-8 p-0">
            <ChevronsLeft className="size-4" />
            <span className="sr-only">Primeira página</span>
          </Button>

          <Button variant="outline" className="size-8 p-0">
            <ChevronLeft className="size-4" />
            <span className="sr-only">Página anterior</span>
          </Button>

          <Button variant="outline" className="size-8 p-0">
            <ChevronRight className="size-4" />
            <span className="sr-only">Próxima página</span>
          </Button>

          <Button variant="outline" className="size-8 p-0">
            <ChevronsRight className="size-4" />
            <span className="sr-only">Última página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
