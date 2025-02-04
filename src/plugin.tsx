/** @jsx jsx */
import {jsx} from '@emotion/core'
import {Builder} from '@builder.io/sdk'
import ReactQuill, {Quill} from 'react-quill'
import {BodyBlot, BodyHeaderBlot, EyebrowBlot, Size} from './formats'
import 'react-quill/dist/quill.snow.css'
import './styles/rich-text.css'

Quill.register(BodyBlot)
Quill.register(BodyHeaderBlot)
Quill.register(EyebrowBlot)
Quill.register(Size)

const modules = {
    toolbar: [
        [{header: [1, 2, 3, 4, 5, 6, false]}], // false removes the header format
        // Body text options
        [{body: ['small', 'medium', 'large', false]}],
        // Body Header text options
        [{'body-header': ['small', 'medium', 'large', false]}],
        // Eyebrow options
        [{eyebrow: ['small', 'large', false]}],
        [{size: ['small', 'medium', 'large', false]}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}],
        [
            {
                color: [
                    '#FFFFFF',
                    '#000000',
                    '#F5F5F5',
                    '#CCCCCC',
                    '#666666',
                    '#CD3C5E',
                    '#117850',
                    '#E9F2FF',
                    '#2458A9',
                    '#375481',
                    '#142745',
                    '#004968',
                    '#FFEA9D',
                    '#E8D2E5',
                    '#C2AAD2',
                    '#8C7FC0',
                    '#55449A',
                    '#BBF3E7',
                    '#4FCCB1',
                    '#228470',
                    '#8D3888',
                    '#5A4058',
                    '#5D1759',
                    '#431340',
                    '#FEEBE5',
                    '#FFC7B6',
                    '#FFB19A',
                    false
                ]
            },
            {
                background: [
                    '#FFFFFF',
                    '#000000',
                    '#F5F5F5',
                    '#CCCCCC',
                    '#666666',
                    '#CD3C5E',
                    '#117850',
                    '#E9F2FF',
                    '#2458A9',
                    '#375481',
                    '#142745',
                    '#004968',
                    '#FFEA9D',
                    '#E8D2E5',
                    '#C2AAD2',
                    '#8C7FC0',
                    '#55449A',
                    '#BBF3E7',
                    '#4FCCB1',
                    '#228470',
                    '#8D3888',
                    '#5A4058',
                    '#5D1759',
                    '#431340',
                    '#FEEBE5',
                    '#FFC7B6',
                    '#FFB19A',
                    false
                ]
            }
        ],
        ['link', 'image'],
        ['clean'],
        [{script: 'sub'}, {script: 'super'}] // superscript/subscript
    ],
    clipboard: {
        matchVisual: false
    }
}

const formats = [
    'header', // h1-h6
    'body', // body-sm, body-md, body-lg
    'body-header', // body-header-sm, body-header-md, body-header-lg
    'eyebrow', // eyebrow-sm, eyebrow-lg
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'color',
    'background',
    'link',
    'image',
    'size',
    'script'
]

interface TextProps {
    value: string
    onChange: (value: string) => void
}

function RichTextEditor(props: TextProps) {
    const {value, onChange} = props

    return (
        <ReactQuill
            value={value}
            onChange={onChange}
            theme="snow"
            modules={modules}
            formats={formats}
        />
    )
}

Builder.registerEditor({
    /**
     * Here we override the built-in richtext editor.
     */
    name: 'html',
    component: (props: TextProps) => (
        <RichTextEditor value={props.value} onChange={props.onChange} />
    )
})

Builder.registerEditor({
    /**
     * Here we override the built-in richtext editor.
     */
    name: 'richText',
    component: (props: TextProps) => (
        <RichTextEditor value={props.value} onChange={props.onChange} />
    )
})
