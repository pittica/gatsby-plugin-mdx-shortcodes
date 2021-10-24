# pittica/gatsby-plugin-mdx-shortcodes

![License](https://img.shields.io/github/license/pittica/gatsby-plugin-mdx-shortcodes)
![Version](https://img.shields.io/github/package-json/v/pittica/gatsby-plugin-mdx-shortcodes)
![Release](https://img.shields.io/github/v/release/pittica/gatsby-plugin-mdx-shortcodes)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/pittica/gatsby-plugin-mdx-shortcodes/react)
[![npm](https://img.shields.io/npm/v/@pittica/gatsby-plugin-mdx-shortcodes)](https://www.npmjs.com/package/@pittica/gatsby-plugin-mdx-shortcodes)

## Description

Shorcodes for gatsby-plugin-mdx.

## Install

[![npm](https://img.shields.io/npm/v/@pittica/gatsby-plugin-mdx-shortcodes)](https://www.npmjs.com/package/@pittica/gatsby-plugin-mdx-shortcodes)
[![npm](https://img.shields.io/npm/dm/@pittica/gatsby-plugin-mdx-shortcodes)](https://www.npmjs.com/package/@pittica/gatsby-plugin-mdx-shortcodes)

```shell
npm install @pittica/gatsby-plugin-mdx-shortcodes
```

## Usage

The plugin provides basic MDX shortcodes.

Edit your **gatsby-browser.js**.

```javascript
import React from "react"
import Shortcodes from "@pittica/gatsby-plugin-mdx-shortcodes"
import { MDXProvider } from "@mdx-js/react"

const wrapRootElement = ({ element }) => (
  <MDXProvider components={Shortcodes}>{element}</MDXProvider>
)

export { wrapRootElement }
```

## Notes

Built for internal use.

## Copyright

(c) 2021, [Pittica S.r.l.](https://pittica.com)
