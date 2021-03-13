import { graphql } from 'gatsby'
import { MarkdownRemark } from '../graphql-types'

import Layout from '../components/layout'
import SEO from '../components/seo'

interface BlogPostProps {
  data: {
    markdownRemark: MarkdownRemark
  }
}

export default function BlogPost({ data }: BlogPostProps) {
  const post = data.markdownRemark

  const postTitle = post.frontmatter?.title || 'Blog Post Title'
  const postDescription = post.excerpt || ''

  return (
    <Layout>
      <SEO title={postTitle} description={postDescription} />
      <div>
        <h1>{postTitle}</h1>
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
      excerpt
    }
  }
`
