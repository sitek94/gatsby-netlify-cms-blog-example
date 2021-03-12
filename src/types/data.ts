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

  allMarkdownRemark: {
    totalCount: number
    edges: [
      {
        node: {
          id: string
          frontmatter: {
            title: string
            date: string
          }
          excerpt: string
        }
      }
    ]
  }
}
