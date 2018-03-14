import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default {
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render () {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <title>Inutile dot co</title>
            <meta name="description" content="Useless, unnecessary, pointless" />
            <meta name="author" content="cedmax" />
            <link rel="manifest" href="/manifest.json" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
            <link href="favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
