> The npm module of Catalog can be integrated into any React application

```hint
This is for the adventurous who don't shy away from a manual webpack setup!
```

```hint|directive
Using [Create Catalog](/installation/create-catalog) will take care of all the steps outlined below.
```

## Installation

Install the `catalog` npm package and its peer dependencies.

```
npm install catalog react react-dom --save
```

Import Catalog, and render it.

```code|lang-js
import React from 'react';
import ReactDOM from 'react-dom';
import {Catalog} from 'catalog';

ReactDOM.render(
  <Catalog
    title='My Catalog'
    pages={[
      {
        path: '/',                     // The path where the page can be accessed
        title: 'Introduction',         // The page title
        component: require('Intro')    // The documenation component
      },
      // Other pages …
    ]}
  />,
  document.getElementById('app')
);
```

See the [React Integration](/react-integration) guide for more details.


## Setting up webpack and Babel

Catalog provides a [webpack](https://webpack.js.org/) loader and a [Babel](http://babeljs.io/) preset which allow you to import hot-reloadable Markdown files and properly display JSX source code in.

Also install webpack's `raw-loader` with `npm install raw-loader --save-dev`

To get the full benefit of Catalog's webpack loader, enable [hot module replacement](https://webpack.js.org/guides/hot-module-replacement/) in your app.

```code|lang-javascript
{
  // Other webpack config ...
  module: {
    rules: [
      {
        test: /\.md$/,
        use: ['catalog/loader', 'raw-loader']
      }
    ]
  }
};
```

In `.babelrc`

```code|lang-javascript
{
  "presets": ["catalog/babel"]
}
```
