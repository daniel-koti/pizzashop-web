import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizzza 01', amount: 4 },
    { product: 'Pizzza 02', amount: 5 },
    { product: 'Pizzza 03', amount: 10 },
    { product: 'Pizzza 04', amount: 2 },
  ])
})
