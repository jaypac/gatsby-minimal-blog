import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `row`,
        marginBottom: rhythm(2.5),
      }}
    >
      <div>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      </div>
      <div>
        <p style={{ marginBottom: `0` }}>
          Written by <strong>{author.name}</strong> {author.summary}
          {` `}
        </p>
        <p>
          <a
            href={`https://twitter.com/${social.twitter}`}
            style={{ boxShadow: `none` }}
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            href={`https://github.com/jaypac`}
            style={{ paddingLeft: `10px`, boxShadow: `none` }}
          >
            <i className="fab fa-github" />
          </a>
          <a
            href={`https://www.linkedin.com/in/jubinj/`}
            style={{ paddingLeft: `10px`, boxShadow: `none` }}
          >
            <i className="fab fa-linkedin" />
          </a>
        </p>
      </div>
    </div>
  )
}

export default Bio
