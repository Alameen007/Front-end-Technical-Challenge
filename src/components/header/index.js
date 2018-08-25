import React from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import { Popconfirm } from 'antd'
import schoolLogo from './../../assets/images/school_logo1.jpg'
import dashboard from './../../assets/images/dashboard.png'
import people from './../../assets/images/team.png'
import classes from './../../assets/images/blackboard.png'
import Subjects from './../../assets/images/languages.png'
import events from './../../assets/images/calendar.png'
import admission from './../../assets/images/textbook.png'

import styles from './style.css'

const header = () => {
  const logout = () => {
    localStorage.setItem('user', JSON.stringify({}))
    localStorage.setItem('token', '')
    let from = location.pathname
    window.location = `${location.origin}/#/login`
  }
  return (
    <header className={styles.navbar}>
      <section className={styles.logo_section}>
        <img src={schoolLogo} alt="" className={styles.school_logo} />
        <h2>FLEXISAF ACADEMY</h2>
      </section>
      <section className={styles.menu_section}>
        <div className={styles.icon_div}>
          <img src={dashboard} alt="" className={styles.icon} />
          <p className={styles.icon_name}>Dashboard</p>
        </div>
        <div className={styles.icon_div}>
          <img src={people} alt="" className={styles.icon} />
          <p className={styles.icon_name}>Teachers</p>
        </div>
        <div className={styles.icon_div}>
          <img src={classes} alt="" className={styles.icon} />
          <p className={styles.icon_name}>Classes</p>
        </div>
        <div className={styles.icon_div}>
          <img src={Subjects} alt="" className={styles.icon} />
          <p className={styles.icon_name}>Subjects</p>
        </div>
        <div className={styles.icon_div}>
          <img src={events} alt="" className={styles.icon} />
          <p className={styles.icon_name}>Time Table</p>
        </div>
        <div className={styles.icon_div}>
          <img src={admission} alt="" className={styles.icon} />
          <p className={styles.icon_name}>Admission</p>
        </div>
      </section>
      <section className={styles.last_section}>
        <div className={styles.admin_sec}>
          <p>Admin</p>
          <p>Setting</p>
          <Popconfirm
            title="Are you sure you want to Logout？"
            okText="Yes"
            cancelText="No"
            placement="left"
            onConfirm={logout}
          >
            <p>Logout</p>
          </Popconfirm>

        </div>
      </section>
    </header>
  )
}

export default header

