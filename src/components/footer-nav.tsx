import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
export default function FooterNav() {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          allStrapiService(sort: { fields: [order], order: ASC }) {
            edges {
              node {
                slug
                title
              }
            }
          }
        }
      `}
      render={data => (
        <nav>
          <ul className="footer__services">
            {data.allStrapiService.edges.map(document => (
              <li key={document.node.slug}>
                <Link href={`https://priestsheetmetal.co.nz/services/${document.node.slug}`} target="_blank" rel="noreferrer"  className="backed">
                  {document.node.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    />
  );
}
