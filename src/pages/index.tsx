import * as React from 'react'
import Layout from '../components/layout'

// markup
function IndexPage() {
  return (
    <Layout>
      <main>
        <title>Home Page</title>

        <div>
          <h1>Blog</h1>

          <p>
            Congratulations
            <br />
            <span>— you just made a Gatsby site! </span>
            <span role="img" aria-label="Party popper emojis">
              🎉🎉🎉
            </span>
          </p>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
