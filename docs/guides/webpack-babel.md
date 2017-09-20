> For customized build setups, Catalog provides a [webpack](https://webpack.js.org/) loader and a [Babel](http://babeljs.io/) preset

This is for the adventurous who don't shy away from configuring webpack! Use this guide if you:

- have a custom webpack/Babel setup already
- need to use specific webpack loaders (e.g. for TypeScript) or Babel transforms

```hint|directive
You _don't_ need a custom setup if you're using Catalog on its own or in combination with [Create React App](https://github.com/facebookincubator/create-react-app) or [next.js](https://github.com/zeit/next.js). Use [Create Catalog](/installation/create-catalog) instead.
```

## Webpack loader

Catalog's webpack loader allows you to import Markdown files as pages.

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

## Babel preset

Catalog's Babel preset ensures that JSX source code of [ReactSpecimens](/specimens/react) is preserved.

Add `catalog/babel` to your presets in `.babelrc`

```code|lang-javascript
{
  "presets": ["catalog/babel"]
}
```
