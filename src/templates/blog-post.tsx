import { graphql } from 'gatsby'
import { MarkdownRemark } from '../graphql-types'

import Layout from '../components/layout'

interface BlogPostProps {
  data: {
    markdownRemark: MarkdownRemark
  }
}

export default function BlogPost({ data }: BlogPostProps) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div>
        <h1>{post.frontmatter?.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html || '' }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
