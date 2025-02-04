import {Quill} from 'react-quill'
import 'react-quill/dist/quill.snow.css'

// Quill imports
const Block = Quill.import('blots/block')
type BodyClassNames = 'small' | 'medium' | 'large' | 'normal'

// Body Format
class BodyBlot extends Block {
    static blotName = 'body'
    static tagName = 'p'

    static classNames = {
        small: 'body-sm',
        medium: 'body-md',
        large: 'body-lg'
    }

    static create(value: BodyClassNames) {
        const node = super.create()
        if (value && value !== 'normal') {
            node.classList.add(BodyBlot.classNames[value])
        }
        return node
    }

    static formats(domNode: Element) {
        if (domNode.classList.contains(BodyBlot.classNames.small)) {
            return 'small'
        }
        if (domNode.classList.contains(BodyBlot.classNames.medium)) {
            return 'medium'
        }
        if (domNode.classList.contains(BodyBlot.classNames.large)) {
            return 'large'
        }
        return null
    }

    format(name: string, value: BodyClassNames) {
        if (name === 'body') {
            Object.values(BodyBlot.classNames).forEach((className) =>
                this.domNode.classList.remove(className)
            )
            if (value && value !== 'normal') {
                this.domNode.classList.add(BodyBlot.classNames[value])
            }
        } else {
            super.format(name, value)
        }
    }
}

BodyBlot.className = 'ql-body'

export default BodyBlot
