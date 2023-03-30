import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function IndustryNav() {

  const { allStrapiIndustry } = useStaticQuery(graphql`
    query IndustyNavQuery {
      allStrapiIndustry(sort: {order: DESC}) {
        nodes {
          slug
          title
        }
      }
    }
  `)

  return (
    <nav>
      <ul className="footer__industries">
        {allStrapiIndustry.nodes.map(document => (
          <li key={document.slug}>
            <a href={`https://priestsheetmetal.co.nz/${document.slug}`}
              target="_blank" rel="noreferrer"
              className="backed footer-lists"
            >
              {document.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
