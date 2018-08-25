import React from 'react'
import styles from './style.css'

const sideNav = () => {
  return (
    <div className={styles.side_nav}>

      <div className={styles.side_item}>
           Students
      </div>
      <div className={styles.side_item}>
            Teachers
      </div>
      <div className={styles.side_item}>
           Media
      </div>
      <div className={styles.side_item}>
            Help & Support
      </div>
    </div>
  )
}

export default sideNav
