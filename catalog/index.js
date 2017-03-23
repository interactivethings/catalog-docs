import {render} from 'catalog';
const publicPath = process.env.PUBLIC_URL;

// We know that Catalog uses react-router, and furthermore that it
// uses browserHistory. And browserHistory is a global/singleton,
// so we can hook into it to listen for route changes and dispatch
// page views.
//
// Note that 'location.pathname' includes the PUBLIC_URL prefix!
import {browserHistory} from 'react-router';
browserHistory.listen((location) => {
  if (typeof _paq !== 'undefined') {
    _paq.push(['setCustomUrl', location.pathname]);
    _paq.push(['trackPageView']);
  }
});

render(
  {
    title: 'Catalog',
    useBrowserHistory: true,
    basePath: publicPath,
    logoSrc: publicPath + '/assets/catalog_logo.svg',
    theme: {
      // Uses default theme
    },
    pages: [
      {path: '/', title: 'Introduction', src: publicPath + '/intro.md'},
      {
        path: 'get-started',
        title: 'Get Started',
        src: publicPath + '/basics/get-started.md'
      },
      {
        path: 'write-documentation',
        title: 'Write Documentation',
        src: publicPath + '/basics/markdown.md'
      },
      {
        path: 'configuration',
        title: 'Configuration',
        src: publicPath + '/basics/configuration.md'
      },
      {
        path: 'react-integration',
        title: 'React Integration',
        src: publicPath + '/react-integration.md'
      },
      // {title: 'Basics', pages: [
      // ]},
      // {title: 'Advanced', pages: [
      //   {path: 'advanced/configuration', title: 'Configuration', src: publicPath + '/coming-soon.md'},
      //   {path: 'advanced/extending', title: 'Writing Specimens', src: publicPath + '/coming-soon.md'},
      // ]},
      {
        title: 'Specimens',
        pages: [
          {
            path: 'specimens',
            title: 'Overview',
            src: publicPath + '/specimens/overview.md'
          },
          {
            path: 'specimens/audio',
            title: 'Audio',
            src: publicPath + '/specimens/audio.md'
          },
          {
            path: 'specimens/code',
            title: 'Code',
            src: publicPath + '/specimens/code.md'
          },
          {
            path: 'specimens/color',
            title: 'Color',
            src: publicPath + '/specimens/color.md'
          },
          {
            path: 'specimens/color-palette',
            title: 'Color Palette',
            src: publicPath + '/specimens/color-palette.md'
          },
          {
            path: 'specimens/download',
            title: 'Download',
            src: publicPath + '/specimens/download.md'
          },
          {
            path: 'specimens/hint',
            title: 'Hint',
            src: publicPath + '/specimens/hint.md'
          },
          {
            path: 'specimens/html',
            title: 'HTML',
            src: publicPath + '/specimens/html.md',
            styles: ['/example-style.css']
          },
          {
            path: 'specimens/image',
            title: 'Image',
            src: publicPath + '/specimens/image.md'
          },
          {
            path: 'specimens/table',
            title: 'Table',
            src: publicPath + '/specimens/table.md'
          },
          {
            path: 'specimens/type',
            title: 'Type',
            src: publicPath + '/specimens/type.md'
          },
          {
            path: 'specimens/video',
            title: 'Video',
            src: publicPath + '/specimens/video.md'
          },
          {
            path: 'specimens/react',
            title: 'React',
            src: publicPath + '/specimens/react.md'
          }
        ]
      },
      {
        path: 'test',
        title: 'Style Test',
        src: publicPath + '/test/test.md',
        styles: [publicPath + '/test/test.css'],
        scripts: [publicPath + '/test/test.js'],
        hideFromMenu: true
      }
    ]
  },
  document.getElementById('catalog')
);
