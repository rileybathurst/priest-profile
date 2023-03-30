import React, { useRef, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

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

        ref.current.className = lineall;
      }
    }
  }, []);

  return (
    <a
      href={`https://priestsheetmetal.co.nz/services/${props.slug}`}
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

  const { allStrapiService } = useStaticQuery(graphql`
    query MyQuery {
      allStrapiService(sort: {order: DESC}) {
        nodes {
          slug
          title
        }
      }
    }
  `)

  return (
    <nav>
      <ul className="footer__services">
        {allStrapiService.nodes.map(service => (
          <li key={service.slug}>
            <LineBreak slug={service.slug} title={service.title} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
