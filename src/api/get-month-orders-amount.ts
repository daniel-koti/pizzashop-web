import { api } from '@/lib/axios'

export interface GetMonthOrderAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthOrdersAmount() {
  const response = await api.get<GetMonthOrderAmountResponse>(
    '/metrics/month-orders-amount',
  )

  return response.data
}
