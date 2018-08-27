import React from 'react'
import { connect } from 'dva'
import { Link } from 'dva/router'
import styles from './IndexPage.css'

function IndexPage () {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '200px' }}>Landing page</h1>
      <Link to="/login"><p style={{ textAlign: 'center' }}>Login as Admin</p></Link>
    </div>


  )
}

IndexPage.propTypes = {
}

export default connect()(IndexPage)
