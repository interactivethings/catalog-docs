import React from "react";
import ReactDOM from "react-dom";
import { Catalog, ContentLoader } from "catalog";
const publicPath = process.env.PUBLIC_URL;

// We know that Catalog uses react-router, and furthermore that it
// uses browserHistory. And browserHistory is a global/singleton,
// so we can hook into it to listen for route changes and dispatch
// page views.
//
// Note that 'location.pathname' includes the PUBLIC_URL prefix!
import { browserHistory } from "react-router";
browserHistory.listen(location => {
  if (typeof _paq !== "undefined") {
    _paq.push(["setCustomUrl", location.pathname]);
    _paq.push(["trackPageView"]);
  }
});

const pages = [
  {
    path: "/",
    title: "Introduction",
    content: ContentLoader(() => import("../public/basics/get-started.md"))
  },
  {
    path: "get-started",
    title: "Get Started",
    content: ContentLoader(() => import("../public/basics/get-started.md"))
  },
  {
    path: "write-documentation",
    title: "Write Documentation",
    content: ContentLoader(() => import("../public/basics/markdown.md"))
  },
  {
    path: "configuration",
    title: "Configuration",
    content: ContentLoader(() => import("../public/basics/configuration.md"))
  },
  {
    path: "react-integration",
    title: "React Integration",
    content: ContentLoader(() => import("../public/react-integration.md"))
  },
  // {title: 'Basics', pages: [
  // ]},
  // {title: 'Advanced', pages: [
  //   {path: 'advanced/configuration', title: 'Configuration', content: ContentLoader(() => import('../public/coming-soon.md'},))
  //   {path: 'advanced/extending', title: 'Writing Specimens', content: ContentLoader(() => import('../public/coming-soon.md'},))
  // ]},
  {
    title: "Specimens",
    pages: [
      {
        path: "specimens",
        title: "Overview",
        content: ContentLoader(() => import("../public/specimens/overview.md"))
      },
      {
        path: "specimens/audio",
        title: "Audio",
        content: ContentLoader(() => import("../public/specimens/audio.md"))
      },
      {
        path: "specimens/code",
        title: "Code",
        content: ContentLoader(() => import("../public/specimens/code.md"))
      },
      {
        path: "specimens/color",
        title: "Color",
        content: ContentLoader(() => import("../public/specimens/color.md"))
      },
      {
        path: "specimens/color-palette",
        title: "Color Palette",
        content: ContentLoader(() =>
          import("../public/specimens/color-palette.md")
        )
      },
      {
        path: "specimens/download",
        title: "Download",
        content: ContentLoader(() => import("../public/specimens/download.md"))
      },
      {
        path: "specimens/hint",
        title: "Hint",
        content: ContentLoader(() => import("../public/specimens/hint.md"))
      },
      {
        path: "specimens/html",
        title: "HTML",
        content: ContentLoader(() => import("../public/specimens/html.md")),
        styles: ["/example-style.css"]
      },
      {
        path: "specimens/image",
        title: "Image",
        content: ContentLoader(() => import("../public/specimens/image.md"))
      },
      {
        path: "specimens/table",
        title: "Table",
        content: ContentLoader(() => import("../public/specimens/table.md"))
      },
      {
        path: "specimens/type",
        title: "Type",
        content: ContentLoader(() => import("../public/specimens/type.md"))
      },
      {
        path: "specimens/video",
        title: "Video",
        content: ContentLoader(() => import("../public/specimens/video.md"))
      },
      {
        path: "specimens/react",
        title: "React",
        content: ContentLoader(() => import("../public/specimens/react.md"))
      }
    ]
  },
  {
    path: "test",
    title: "Style Test",
    content: ContentLoader(() =>
      import(/* webpackChunkName: "test" */ "../public/test/test.md")
    ),
    styles: [publicPath + "/test/test.css"],
    scripts: [publicPath + "/test/test.js"],
    hideFromMenu: true
  }
];

ReactDOM.render(
  <Catalog
    title="Catalog"
    useBrowserHistory
    basePath={publicPath}
    logoSrc={publicPath + "/assets/catalog_logo.svg"}
    theme={{
      // Uses default theme
    }}
    pages={pages}
  />,
  document.getElementById("catalog")
);
