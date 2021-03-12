export interface Data {
  site: {
    siteMetadata: {
      title: string
    }
  }

  allFile: {
    edges: [
      {
        node: {
          relativePath: string
          prettySize: string
          extension: string
          birthTime: string
        }
      }
    ]
  }
}
