// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

// TinaCMS
import React from 'react'
import { TinaProvider, TinaCMS } from 'tinacms'

export function wrapRootElement(
    { element }
  ){
    window.tinacms = new TinaCMS({
      enabled: true,
      sidebar: true,
      toolbar: true,
    });
    return <TinaProvider cms={window.tinacms}>{element}</TinaProvider>
  }