import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import styles from '../styles/project-details.module.css'

export default function ProjectDetails({ data }) {

    const { html } = data.markdownRemark
    const { title, stack, featuredImg } = data.markdownRemark.frontmatter

    return (
        <div className={styles.details}>
            <Layout>
                <div>
                    <h2>{title}</h2>
                    <h3>{stack}</h3>
                    <div className={styles.featured}>
                        <Img fluid={featuredImg.childImageSharp.fluid} />
                    </div>
                    <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
                </div>
            </Layout>
        </div>
    )
}


export const query = graphql`
        
query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  
      

`