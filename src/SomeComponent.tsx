import { CKEditor } from '@ckeditor/ckeditor5-react'
import { DecoupledEditor, Essentials, Paragraph } from 'ckeditor5'
import React from 'react'

export const SomeComponent = () => {
  return (
    <div
      style={{
        border: '1px solid black',
        padding: 10,
      }}
    >
      <CKEditor
        editor={DecoupledEditor}
        config={{
          initialData: 'Some content here',
          plugins: [Essentials, Paragraph],
        }}
      />
    </div>
  )
}
