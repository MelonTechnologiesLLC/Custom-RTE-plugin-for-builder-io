import {Quill} from 'react-quill'
const Inline = Quill.import('blots/inline')

const sizeMap = {
    small: 'sm',
    medium: 'md',
    large: 'lg',
    normal: ''
} as const // 'as const' ensures the keys and values are literal types

type SizeValue = keyof typeof sizeMap // This creates a union type: 'small' | 'medium' | 'large'

// Custom class to handle size formatting with class names only
class Size extends Inline {
    static blotName = 'size' // The name of the format (used in the editor)

    // Extract the format from the node (check if the class exists)
    static formats(node: HTMLElement): string | null {
        if (node.classList.contains('body-sm')) {
            return 'small'
        } else if (node.classList.contains('body-md')) {
            return 'medium'
        } else if (node.classList.contains('body-lg')) {
            return 'large'
        }
        return null // No class means 'normal' size
    }

    // Apply the size format by adding/removing classes
    format(name: string, value: SizeValue) {
        if (name === 'size') {
            this.domNode.classList.remove('body-sm', 'body-md', 'body-lg')
            if (value && value !== 'normal') {
                this.domNode.classList.add(`body-${sizeMap[value]}`)
            }
        } else {
            super.format(name, value) // Handle other formats normally
        }
    }

    // Optional: Handle new nodes by adding the appropriate class
    static create(value: SizeValue): HTMLElement {
        let node = super.create() as HTMLElement
        if (value && value !== 'normal') {
            node.classList.add(`body-${sizeMap[value]}`)
        }
        return node
    }
}

export default Size
