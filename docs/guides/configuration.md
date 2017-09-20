> Configure Catalog to add style guide pages, import code from your application, and theme it to match your brand

To get Catalog running, you need to configure it with a `title` and some `pages`.

Either provide the configuration to `Catalog.render()` or to the `Catalog` React component.

```code
span: 3
lang: js
---
// In any script:

Catalog.render(
  {
    title: 'My Style Guide',
    pages: [
      // …
    ]
  },
  element
);
```

```code
span: 3
lang: jsx
---
// With React:

ReactDOM.render(
  <Catalog
    title='My Style Guide',
    pages={[
      // …
    ]}
  />,
  element
);
```

### `title`

`string`

The title of your Catalog


## Pages

### `pages`

`Array<Page|PageGroup>`

Add pages and page groups to your style guide.

#### Page

- `path: string`: The path where the page is accessible
- `title: string`: The title of the page (also shows up in the navigation)
- `content: React.Component`: A Catalog page
- `imports?: Imports`: page [imports](#imports) (optional)
- `styles?: Styles`: page [styles](#styles) (optional)
- `scripts?: Scripts`: page [scripts](#scripts) (optional)

```hint|directive
You should at least have a page with path `'/'` (which is the first page shown)
```

##### A note on the `content` property

A page's `content` property expects a valid React component.

Either import page components statically or use Catalog's `pageLoader` function to create components that lazy-load pages from different sources.

These are all valid examples for `content`:

```code
lang: js
---
// Statically import a page
import Intro from './Intro';
{ content: Intro }

// Statically `require` a page
{ content: require('./Intro') }

// Lazy-load a static Markdown page in the browser
{ content: Catalog.pageLoader('intro.md') }

// Lazy-load a page component
{ content: Catalog.pageLoader(() => import('./Intro'))) }
```

##### Page Example

```code
lang: js
---
{
  title: 'My Catalog',
  pages: [
    {
      path: '/',
      title: 'Introduction',
      content: Catalog.pageLoader('intro.md') // Load page from a static Markdown file
    },
    // Other pages …
  ]
}
```

#### Page Group

To create a page group, specify an object with a `title` and a `pages` property. The pages added to the group are grouped in the navigation.

- `title: string`: The title of the page group
- `pages: Array<Page>`: An array of pages

```hint
Page groups can only contain pages but not other page groups.
```

```
{
  title: 'My Catalog',
  pages: [
    {
      path: '/',
      title: 'Introduction',
      content: Catalog.pageLoader('intro.md')
    },
    {
      title: 'Basics',
      pages: [
        {
          path: '/get-started',
          title: 'Get Started',
          content: Catalog.pageLoader('get-started.md')
        },
        // Other subpages of 'Basics'
      ]
    },

  ]
}
```

## Routing

### `useBrowserHistory`

`boolean`

To maximize compatibility, Catalog uses hash-based routing (e.g. `my-styleguide.com/#/about`) by default. If your web server is [configured properly](http://readystate4.com/2012/05/17/nginx-and-apache-rewrite-to-support-html5-pushstate/), it can also use HTML5 pushstate-based routing, so you get "real" URLs (e.g. `my-styleguide.com/about`). Set `useBrowserHistory` to `true` to enable this.

### `basePath`

`string`

If you want Catalog to run under a certain base path, e.g. `my-styleguide.com/catalog/about`, set the `basePath` configuration option. The base path will be prefixed to all page paths.

This only works best together with `useBrowserHistory`.

#### Route Settings Example

```code
lang: js
---
{
  title: 'My Catalog',
  basePath: '/catalog',
  useBrowserHistory: true,
  pages: [
    {
      path: '/',        // Page will be accessible at `/catalog/`
      title: 'Introduction',
      // …
    },
    {
      path: '/about',   // Page will be accessible at `/catalog/about/`
      title: 'About',
      // …
    },
    // Other pages …
  ]
}
```

## Including Code From Your Application

To document your application properly, you need to include its styles and scripts. You have three options for doing that:

```hint|directive
You can either set these at the top level, or on each page. Styles, scripts, and imports defined at the top level will be available on each page.
```

### `styles`

`Array<string>`

Catalog will include CSS files referenced in the `styles` option.

#### Styles Example

```code
lang: js
---
{
  styles: ['/foo.css', '/bar.css']
  // Other options …
  pages: [
    {
      styles: ['/foobar.css'],
      // On this page, 'foo.css', 'bar.css', and 'foobar.css' will be included
      // Other page options …
    }
  ]
}
```

### `scripts`

`Array<string>`

Catalog will inject JavaScript files referenced in the `scripts` option.

#### Scripts Example

```code
lang: js
---
{
  scripts: ['/foo.js', '/bar.js']
  // Other options …
  pages: [
    {
      scripts: ['/foobar.js'],
      // On this page, 'foo.js', 'bar.js', and 'foobar.js' will be injected
      // Other page options …
    }
  ]
}
```

### `imports`

`{[key: string]: any}`

To make components and other code available to your [Specimens](/specimens), use the `imports` option.

#### Imports Example

```code
lang: js
---
{
  imports: {Foo: require('Foo'), Bar: require('Bar')}
  // Other options …
  pages: [
    {
      imports: {FooBar: require('FooBar')},
      // On this page, 'Foo', 'Bar', and 'FooBar' will be available to use in React Specimens
      // Other page options …
    }
  ]
}
```

## Responsive Specimens

### `responsiveSizes`

`Array<{name: string, width: number, height: number}>`

To test or document responsive behavior of [React](/specimens/react#responsive-display) and [HTML](/specimens/html#responsive-display) components, Catalog provides some basic default screen sizes (`small, medium, large` and `xlarge`). Given that each project has different requirements, you can easily define new sizes.

Let's assume you want to work with a smart watch, a tablet and Desktop, the Catalog configuration could look like this:

```code
...
title: 'Catalog',
responsiveSizes: [
  {name: 'watch', width: 272, height: 340}
  {name: 'tablet', width: 1024, height: 768},
  {name: 'desktop', width: 1920, height: 1080},
],
pages: [
...

```

## Theming Catalog

### `logoSrc`

`string`

Path to a logo image file which will be placed in the top-left corner.

### `theme`

`Object`

Object which describes which colors, fonts and font sizes to use.

```code
…
title: 'Catalog',
theme: {
  <theme configuration here…>
}
…
```

#### `fontFamily` / `fontHeading` / `fontMono`

The name (including any fallback fonts) of the font for copy text, headings and pre/code blocks.

#### `baseFontSize` / `msRatio`

The font size is derived from these two values. Default is 16px / 1.2. See [modularscale](http://www.modularscale.com/?16&px&1.2&web&text).

#### Colors

The [src/DefaultTheme.js](https://github.com/interactivethings/catalog/blob/master/src/DefaultTheme.js) file contains all colors which you can set.

##### `background`, `textColor`, `codeColor`, `linkColor`

The primary foreground and background colors.

##### `lightColor`

NavigationBar background color, but also sometimes used as a foreground
or border color.

##### `pageHeading{Background,TextColor,Height}`

Used in PageHeader. `pageHeadingHeight` is not a color but the height of the
whole PageHeader component.

##### `brandColor`

NavigationBar (links), ResponsiveTabs (tab text), Download specimen (title text).
Typography: headings.

##### `sidebarColor{,Active,Text,TextActive,Line,Heading}`

Used in the sidebar.

##### `bg{Light,Dark}`, `checkerboardPattern{Light,Dark}`

Background colors and patterns for html, react, and image specimens.

##### `codeStyles`

Map from [PrismJS](http://prismjs.com/) token type to style object. Example:

```code
codeStyles: {
  tag: {color: '#FF5555', fontWeight: 'bold'}
}
```

