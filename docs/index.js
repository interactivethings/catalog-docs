import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";
import logo from "./catalog_logo.svg";

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

// Create a convenient loader for markdown files
const markdownLoader = page => pageLoader(() => import(`./${page}.md`));

const pages = [
  {
    path: "/",
    title: "Introduction",
    content: markdownLoader("intro")
  },
  {
    title: "Installation",
    pages: [
      {
        path: "installation/create-catalog",
        title: "Create Catalog",
        content: markdownLoader("installation/create-catalog")

      },
      {
        path: "installation/standalone",
        title: "Standalone",
        content: markdownLoader("installation/standalone")

      },
      {
        path: "installation/npm",
        title: "npm",
        content: markdownLoader("installation/npm")

      }
    ]
  },
  {
    title: "Guides",
    pages: [
      {
        path: "guides/markdown",
        title: "Markdown",
        content: markdownLoader("guides/markdown")
      },
      {
        path: "guides/frameworks",
        title: "Framework Integration",
        content: markdownLoader("guides/frameworks")
      },

    ]
  },
  {
    title: "API Documentation",
    pages: [
      {
        path: "api/configuration",
        title: "Configuration",
        content: markdownLoader("api/configuration")
      },
      {
        path: "api/react",
        title: "React Components",
        content: markdownLoader("api/react")
      },
    ]
  },
  {
    title: "Specimens",
    pages: [
      {
        path: "specimens",
        title: "Overview",
        content: markdownLoader("specimens/overview")
      },
      {
        path: "specimens/audio",
        title: "Audio",
        content: markdownLoader("specimens/audio")
      },
      {
        path: "specimens/code",
        title: "Code",
        content: markdownLoader("specimens/code")
      },
      {
        path: "specimens/color",
        title: "Color",
        content: markdownLoader("specimens/color")
      },
      {
        path: "specimens/color-palette",
        title: "Color Palette",
        content: markdownLoader("specimens/color-palette")
      },
      {
        path: "specimens/download",
        title: "Download",
        content: markdownLoader("specimens/download")
      },
      {
        path: "specimens/hint",
        title: "Hint",
        content: markdownLoader("specimens/hint")
      },
      {
        path: "specimens/html",
        title: "HTML",
        content: markdownLoader("specimens/html"),
        styles: ["/example-style.css"]
      },
      {
        path: "specimens/image",
        title: "Image",
        content: markdownLoader("specimens/image")
      },
      {
        path: "specimens/table",
        title: "Table",
        content: markdownLoader("specimens/table")
      },
      {
        path: "specimens/type",
        title: "Type",
        content: markdownLoader("specimens/type")
      },
      {
        path: "specimens/video",
        title: "Video",
        content: markdownLoader("specimens/video")
      },
      {
        path: "specimens/react",
        title: "React",
        content: markdownLoader("specimens/react")
      }
    ]
  },
  {
    path: "test",
    title: "Style Test",
    content: markdownLoader("test/test"),
    styles: [`${process.env.PUBLIC_URL}/test/test.css`],
    scripts: [`${process.env.PUBLIC_URL}/test/test.js`],
    hideFromMenu: true
  },
  {
    path: "testtemplate",
    title: "Template Test",
    content: pageLoader(() => import("./test/testtemplate.js")),
    hideFromMenu: true
  }
];

ReactDOM.render(
  <Catalog
    title="Catalog"
    useBrowserHistory
    logoSrc={logo}
    theme={{
      // Uses default theme
    }}
    pages={pages}
  />,
  document.getElementById("catalog")
);
