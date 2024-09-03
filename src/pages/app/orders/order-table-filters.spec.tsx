import { fireEvent, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

import { OrderTableFilters } from './order-table-filters'

describe('Order table filters', () => {
  it('should filter orders by id', async () => {
    const user = userEvent.setup()

    const wrapper = render(<OrderTableFilters />, {
      wrapper: ({ children }) => {
        return <MemoryRouter>{children}</MemoryRouter>
      },
    })

    const inputFilterId = wrapper.getByPlaceholderText(
      'ID do pedido',
    ) as HTMLInputElement

    fireEvent.change(inputFilterId, {
      target: {
        value: '9348',
      },
    })

    const filterOrderButton = wrapper.getByRole('button', {
      name: 'Filtrar resultados',
    })

    await user.click(filterOrderButton)

    expect(inputFilterId.value).toBe('9348')
  })
})
