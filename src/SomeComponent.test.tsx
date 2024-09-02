import { render } from '@testing-library/react'
import { SomeComponent } from 'src/SomeComponent'
import React from 'react'

it('renders', () => {
  expect(render(<SomeComponent />)).toBeTruthy()
})
