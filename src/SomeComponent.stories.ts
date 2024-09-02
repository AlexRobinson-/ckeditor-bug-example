import type { StoryObj } from '@storybook/react'
import { SomeComponent } from './SomeComponent'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  component: SomeComponent,
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
}
