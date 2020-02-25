import React from "react"

import Layout from "../components/layout"
import Challenger from "../components/Challenger"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Office Pushups Challenge" />
    <Challenger challenger="Taz" />
    <Challenger challenger="David" />
    <Challenger challenger="Andi" />
    <Challenger challenger="Gabriel" />
    <Challenger challenger="Mohamad" />
    <Challenger challenger="Sagar" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default IndexPage
