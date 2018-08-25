import React from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import Header from './../../components/header'
import SideNav from './../../components/side nav'
import StudentProfile from './components/profile'


import styles from './style.css'

const ProfileIndex = ({
  students, dispatch, loading, location,
}) => {
  const {
    list,
    modalVisible,
    modalType,
    currentItem,
    info,
    // pagination,
  } = students
  // const { pageSize } = pagination
  const modalProps = {
    item: currentItem,
    visible: modalVisible,
    width: 700,
    maskClosable: false,
    title: 'Update Student',
    okText: 'Update Student',
    wrapClassName: 'vertical-center-modal',
    onOk (data) {
      dispatch({
        type: 'students/update',
        payload: data,
      })
    },
    onUpdate () {
      dispatch({
        type: 'students/showModal',
      })
    },
    onCancel () {
      dispatch({
        type: 'students/hideModal',
      })
    },
  }


  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <SideNav />
        <div className={styles.profile_div}>
          <StudentProfile modalVisible={modalVisible} info={info} {...modalProps} />
        </div>
      </div>
    </div>
  )
}

export default connect(({ students, loading }) => ({ students, loading }))(ProfileIndex)
