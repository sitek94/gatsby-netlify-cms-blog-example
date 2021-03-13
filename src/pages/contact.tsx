import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" description="Get in touch" />
      <h1>I would love to talk! Email me at the address below</h1>
      <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
    </Layout>
  )
}
