import {Quill} from 'react-quill'
import 'react-quill/dist/quill.snow.css'

// Quill imports
const Block = Quill.import('blots/block')
type BodyClassNames = 'small' | 'medium' | 'large' | 'normal'

// Body Header Format
class BodyHeaderBlot extends Block {
    static blotName = 'body-header'
    static tagName = 'p'

    static classNames = {
        small: 'body-header-sm',
        medium: 'body-header-md',
        large: 'body-header-lg'
    }

    static create(value: BodyClassNames) {
        const node = super.create()
        if (value && value !== 'normal') {
            node.classList.add(BodyHeaderBlot.classNames[value])
        }
        return node
    }

    static formats(domNode: Element) {
        if (domNode.classList.contains(BodyHeaderBlot.classNames.small)) {
            return 'small'
        }
        if (domNode.classList.contains(BodyHeaderBlot.classNames.medium)) {
            return 'medium'
        }
        if (domNode.classList.contains(BodyHeaderBlot.classNames.large)) {
            return 'large'
        }
        return null
    }

    format(name: string, value: BodyClassNames) {
        if (name === 'body') {
            Object.values(BodyHeaderBlot.classNames).forEach((className) =>
                this.domNode.classList.remove(className)
            )
            if (value && value !== 'normal') {
                this.domNode.classList.add(BodyHeaderBlot.classNames[value])
            }
        } else {
            super.format(name, value)
        }
    }
}

BodyHeaderBlot.className = 'ql-body-header'

export default BodyHeaderBlot
