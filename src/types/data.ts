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
        node: MarkdownRemark
      }
    ]
  }
}

export interface MarkdownRemark {
  id: string
  frontmatter: {
    title: string
    date: string
  }
  excerpt: string
  html: string
  fields: {
    slug: string
  }
}
