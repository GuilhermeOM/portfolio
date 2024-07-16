import { render } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'

import LanguageSelect from './language-select'

const mockUsePathname = vi.fn()

vi.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: () => vi.fn(),
    }
  },
  usePathname() {
    return mockUsePathname()
  },
}))

describe('language-select', () => {
  test('renders with language pathname as default value', () => {
    mockUsePathname.mockImplementation(() => '/pt-BR')

    const selectDefaultValue = 'PT-BR'
    const { queryByText } = render(<LanguageSelect />)

    expect(queryByText(selectDefaultValue)).not.toBe(null)
  })
})
