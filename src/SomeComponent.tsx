import {CKEditor} from '@ckeditor/ckeditor5-react'
import {DecoupledEditor, Essentials, Paragraph} from 'ckeditor5'
import React, {useRef} from 'react'

export const SomeComponent = ({value, onChange}) => {
    const editorRef = useRef<DecoupledEditor>()

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
                    plugins: [Essentials, Paragraph],
                }}
                onReady={editor => {
                    editorRef.current = editor
                }}
                data={value}
                onChange={() => {
                    onChange(editorRef.current?.getData())
                }}
            />
        </div>
    )
}
