import React, { useRef, useEffect } from "react";
import { StaticQuery, graphql } from "gatsby";

function LineBreak(props) {
  const ref = useRef();

    useEffect(() => {
      if (ref.current) {
        if (ref.current.innerText.length > 20) {
          // console.log(ref.current);
          // console.log(ref.current.innerText);
          // console.log(ref.current.className);

          const longline = ref.current.className;
          const lineall = longline + " line-breaker";

          // console.log("🦖 " + lineall);
          ref.current.className = lineall;
        }
      }
    }, []);

  return (
    <a
      // href={`https://priestsheetmetal.co.nz/services/${document.node.slug}`}
      target="_blank"
      rel="noreferrer"
      className="backed footer-lists"
      ref={ref}
    >
      {props.title}
    </a>
  );
}

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
                <LineBreak slug={document.node.slug} title={document.node.title} />
              </li>
            ))}
          </ul>
        </nav>
      )}
    />
  );
}
