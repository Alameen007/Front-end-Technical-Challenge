import React from 'react'
import { connect } from 'dva'
import { BackTop } from 'antd'
import { Link } from 'dva/router'
import styles from './IndexPage.css'

function IndexPage () {
  return (
    <div>
    Front-end Technical Challenge
    </div>


  )
}

IndexPage.propTypes = {
}

export default connect()(IndexPage)
