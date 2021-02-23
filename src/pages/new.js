import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styles from './blog.module.css'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

class NewIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const tests = get(this, 'props.data.allContentfulTest.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className={styles.hero}>Test</div>
          <div className="wrapper">
            <h2 className="section-headline">Test Content</h2>
            <ul className="article-list">
              {tests.map(({node}) => {
                return (
                  <li>
                    <div>{node.title}</div>
                    <div>{documentToReactComponents(node.rich.json)}</div>
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

export default NewIndex

export const pageQuery = graphql`
  query TestQuery {
    allContentfulTest {
      edges {
        node {
          rich {
            json
          }
          title
        }
      }
    }
  }
`
