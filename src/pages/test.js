import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styles from './blog.module.css'
import Layout from '../components/layout'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const users = get(this, 'props.data.postgres.allImpactUsers.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className={styles.hero}>Test</div>
          <div className="wrapper">
            <h2 className="section-headline">Postgres Users</h2>
            <ul className="article-list">
              {users.map(({ node }) => {
                return (
                  <li key={node.id}>
                    {node.email}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
    query ImpactUsersQuery {
        postgres {
            allImpactUsers (first: 4, orderBy: NATURAL) {
                edges {
                    node {
                        id
                        email
                    }
                }
            }
        }
    }
`
