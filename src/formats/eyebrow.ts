import {Quill} from 'react-quill'
import 'react-quill/dist/quill.snow.css'

// Quill imports
const Inline = Quill.import('blots/inline')
type EyebrowClassNames = 'small' | 'large' | 'normal'

// Eyebrow Format
class EyebrowBlot extends Inline {
    static blotName = 'eyebrow'
    static tagName = 'span'

    static classNames = {
        small: 'eyebrow-sm',
        large: 'eyebrow-lg'
    }

    static create(value: EyebrowClassNames) {
        const node = super.create()
        if (value && value !== 'normal') {
            node.classList.add(EyebrowBlot.classNames[value])
        }
        return node
    }

    static formats(domNode: Element) {
        if (domNode.classList.contains(EyebrowBlot.classNames.small)) {
            return 'small'
        }
        if (domNode.classList.contains(EyebrowBlot.classNames.large)) {
            return 'large'
        }
        return null
    }

    format(name: string, value: EyebrowClassNames) {
        if (name === 'eyebrow') {
            Object.values(EyebrowBlot.classNames).forEach((className) =>
                this.domNode.classList.remove(className)
            )
            if (value && value !== 'normal') {
                this.domNode.classList.add(EyebrowBlot.classNames[value])
            }
        } else {
            super.format(name, value)
        }
    }
}

EyebrowBlot.className = 'ql-eyebrow'

export default EyebrowBlot
