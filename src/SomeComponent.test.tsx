import {render, waitFor, screen, fireEvent} from '@testing-library/react'
import { SomeComponent } from 'src/SomeComponent'
import React from 'react'
import {userEvent} from "@testing-library/user-event";

global.window.ResizeObserver = class ResizeObserver {
  observe() {
    // do nothing
  }
  unobserve() {
    // do nothing
  }
  disconnect() {
    // do nothing
  }
}

it('renders', async () => {
  render(<SomeComponent value="this is some content" />)

  await waitFor(() => expect(screen.getByText(/some content/)).toBeTruthy())
})

it('updates', async () => {
  const onChange = jest.fn()
  render(<SomeComponent value="this is some content" onChange={onChange} />)

  await waitFor(() => expect(screen.getByText(/some content/)).toBeTruthy())

  await userEvent.click(document.querySelector('[contenteditable="true"]'))

  userEvent.keyboard('more stuff')

  await waitFor(() => expect(onChange).toHaveBeenCalled())
})
