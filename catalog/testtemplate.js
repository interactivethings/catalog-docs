import {markdown} from 'catalog';
import logo from '../public/assets/catalog_logo.svg'

export default markdown`
# Yo yo

This is a markdown template literal

~~~image
src: ${logo}
title: Neat!
~~~

Super nice stuff here!

Foo bar
`