import { graphql, PageProps } from 'gatsby'
import { Query } from '../graphql-types'

import Layout from '../components/layout'

export default function About({ data }: PageProps<Query>) {
  return (
    <Layout>
      <h1>{data.site?.siteMetadata?.title}</h1>
      <p>
        I’m good enough, I’m smart enough, and gosh darn it, people like me!
      </p>
    </Layout>
  )
}

export const query = graphql`
  query About {
    site {
      siteMetadata {
        title
      }
    }
  }
`
