import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

// import '../scss/layouts/home.scss';

export default class IndexPage extends React.Component {
    render() {
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark

        const meta = {
            name: data.site.siteMetadata.title,
            description: data.site.siteMetadata.description,
            slug: data.site.siteMetadata.siteUrl,
        };

        return (
            <Layout meta={meta}>
               <h1>See Me After</h1>            </Layout>
        )
    }
}

  
export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
                description
                siteUrl
            }
        }
    }
  `
  