import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HeaderContact from "../components/header-contact";
import Seo from "../components/seo";

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404 - Page not found" />
      <HeaderContact />
      <main className="page-width">
        <h1>NOT FOUND</h1>
        <p>Sorry, You just hit a route that doesn&#39;t exist....<br />
        Let's try take this back to the <Link to="/">home page</Link> and start again.</p>
      </main>
    </Layout>
  )
}

export default NotFoundPage
