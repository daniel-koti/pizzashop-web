import { http, HttpResponse } from 'msw'

import { GetMonthOrderAmountResponse } from '../get-month-orders-amount'

export const getMonthOrdersAmountMock = http.get<
  never,
  never,
  GetMonthOrderAmountResponse
>('/metrics/month-orders-amount', () => {
  return HttpResponse.json({
    amount: 20,
    diffFromLastMonth: -5,
  })
})
