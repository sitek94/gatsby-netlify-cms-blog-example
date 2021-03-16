import { graphql, PageProps, Link } from 'gatsby'
import { css } from '@emotion/react'

import { Query } from '../graphql-types'
import { rhythm } from '../lib/typography'

import Layout from '../components/layout'
import Container from '../components/container'
import SEO from '../components/seo'

export default function Home({ data }: PageProps<Query>) {
  return (
    <Layout>
      <SEO
        title={data.site?.siteMetadata?.title || 'Home'}
        description={data.site?.siteMetadata?.description || 'Description'}
      />
      <Container>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Amazing Pandas Eating Things
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields?.slug || ''}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter?.title}{' '}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {node.frontmatter?.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </Container>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
