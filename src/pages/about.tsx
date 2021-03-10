import Layout from '../components/layout'
import { graphql } from 'gatsby'

import { AboutQuery } from '../../graphql-types'

type AboutProps = {
  data: AboutQuery
}

export default function About({ data }: AboutProps) {
  return (
    <Layout>
      <h1>{data?.site?.siteMetadata?.title}</h1>
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
