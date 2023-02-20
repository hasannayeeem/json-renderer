import React, { createElement } from 'react'
import Button from '../components/Button'
import Div from '../components/Div'
import Image from '../components/Image'
import Subscription from '../components/Subscription'
import Text from '../components/Text'
import Title from '../components/Title'
const keysToComponentMap = {
    div: Div,
    button: Button,
    heading: Title,
    text: Text,
    image: Image,
    subscription: Subscription
}
function RenderComponent({element}) {
    if(typeof keysToComponentMap[element.type] !== 'undefined'){
        return createElement(
            keysToComponentMap[element.type],
            {
                style: element.style,
                attr: element.attr,
                form: element.form
            },
            element.content ? element.content : null
        )
    }
}

export default RenderComponent