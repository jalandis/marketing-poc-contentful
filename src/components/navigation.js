import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/test/">Postgres Users</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/new/">New Content</Link>
      </li>
    </ul>
  </nav>
)
