import React from "react"

import Layout from "../components/layout"
import Tally from "../components/Tally"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Office Pushups Challenge" />
    <Tally />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default IndexPage
