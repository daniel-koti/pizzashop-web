import { api } from '@/lib/axios'

export interface GetOrdersQuery {
  pageIndex?: number | null
}

type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

export interface Order {
  orderId: string
  createdAt: string
  status: OrderStatus
  customerName: string
  total: number
}

export interface GetOrdersResponse {
  orders: Order[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders({ pageIndex }: GetOrdersQuery) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex,
    },
  })

  return response.data
}
