import type {StoryFn, StoryObj} from '@storybook/react'
import { SomeComponent } from './SomeComponent'
import {useState} from "react";
import React from 'react'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  component: SomeComponent,
}

export default meta

const Template: StoryFn<typeof SomeComponent> = args => {
  const [value, setValue] = useState(args.value)

  return <SomeComponent {...args} value={value} onChange={setValue} />
}

export const Default = Template.bind({})

Default.args = {
  value: 'Some content',

}
