import * as React from "react"
import { Link } from "gatsby"

function ServicesCatchAll({ params }) {
  return (
    <div className="wrapper">
      <header>
        <Link to="/">Go back to "Home"</Link>
      </header>
      <main>
        <h1>Couldn't find Service</h1>
        <p>We couldn't locate the service "{params.name}"</p>
      </main>
    </div>
  )
}

export default ServicesCatchAll
