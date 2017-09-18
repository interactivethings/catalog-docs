> Catalog itself is a React app. You can use its components to document your code more effectively.

## `Catalog`

The main `Catalog` component accepts all [configuration options](/api/configuration) as props. Use it directly with `ReactDOM.render()`.

```code|lang-jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {Catalog} from 'catalog';

ReactDOM.render(
  <Catalog
    title='My Styleguide'
    basePath='/catalog'
    pages={[
      // ...
    ]}
  />,
  document.getElementById('root')
);
```

## `*Specimen`

All [Specimens](/specimens) are exported as React components. Specimen options can be used as props.

The Specimen component names are capitalized versions of the Specimen type. E.g.

```table
rows:
  - {Type: "react", Component: "**ReactSpecimen**"}
  - {Type: "color-palette", Component: "**ColorPaletteSpecimen**"}
  - {Type: "etc.", Component: ""}
```

These are equivalent:

````code
span: 3
---
```color
name: "Red"
value: "#FF5500"
span: 2
```
````

````code|lang-jsx
span: 3
---
<ColorSpecimen
  name="Red"
  value="#FF5500"
  span={2}
/>
````


## `markdown`

Instead of using Markdown files, you can use Catalog's `markdown` tagged template literal to create pages.

This enables you to

- generate documentation programmatically,
- mix specimens with other components,
- or share state across specimens.

… while still retaining the convenience of writing Markdown for the page content.

Include specimens (and other components) by interpolating them with `${...}`.

For example:

```code|lang-jsx
import React from 'react';
import {markdown, ReactSpecimen, ColorPaletteSpecimen} from 'catalog';

import Button from './components/Button/Button';
import {generateColorPalette} from './utils';

export default () => markdown`
  ## My Buttons

  Are so nice

  - Yes
  - or no?

  ${<ReactSpecimen span={3}>
      <Button primary>Foo</Button>
    </ReactSpecimen>}

  ${<ColorPaletteSpecimen
      span={3}
      colors={generateColorPalette()}
    />}
`;
```


## `Page`

As an alternative to the `markdown` literal, you can also use the `Page` component directly.

This example is equivalent to above's:

```code|lang-jsx
import React from 'react';
import {Page, ReactSpecimen, ColorPaletteSpecimen} from 'catalog';
import Button from 'components/Button/Button';

export default () => (
  <Page>
    <h2>My Buttons</h2>

    <p>Are so nice</p>

    <ul>
      <li>Yes</li>
      <li>or no?</li>
    </ul>

    <ReactSpecimen span={3}>
      <Button primary>Foo</Button>
    </ReactSpecimen>

    <ColorPaletteSpecimen
      span={3}
      colors={generateColorPalette()}
    />
  </Page>
);
```
