import React from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import Header from './../../components/header'
import SideNav from './../../components/side nav'
import Modal from './components/Modal'
import List from './components/List'


import styles from './style.css'

const Students = ({
  students, dispatch, loading, location,
}) => {
  const {
    list,
    modalVisible,
    modalType,
    currentItem,
    searchToken,
    tableLoading,
  } = students
  const modalProps = {
    item: currentItem,
    visible: modalVisible,
    width: 700,
    maskClosable: false,
    title: `${modalType === 'create' ? 'Create Student' : 'Update Student'}`,
    okText: `${modalType === 'create' ? 'Create Student' : 'Update Student'}`,
    wrapClassName: 'vertical-center-modal',
    onOk (data) {
      dispatch({
        type: `students/${modalType}`,
        payload: data,
      })
    },
    onCancel () {
      dispatch({
        type: 'students/hideModal',
      })
    },
  }
  const listProps = {
    dataSource: list,
    searchToken,
    tableLoading,
    location,
    dispatch,
    onUpdate (item) {
      dispatch({
        type: 'students/showModal',
        payload: {
          modalType: 'update',
          info: item,
          currentItem: item,
        },
      })
    },
    profilePage (item) {
      localStorage.setItem('currentStudent', JSON.stringify(item))
      dispatch({
        type: 'students/save', 
        payload: {
          info: item,
          currentItem: item,
        },
      })
    },
    onDeleteItem (id) {
      dispatch({
        type: 'students/deleteById',
        payload: id,
      })
    },
    onChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
        },
      }))
    },
  }
  const filterProps = {
    onAdd () {
      dispatch({
        type: 'students/showModal',
        payload: {
          modalType: 'create',
          currentItem: {
            // country1Nationality: {},
            sessionOfAdmission: {},
            // addressState: {},
          },
        },
      })
    },
  }


  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <SideNav />
        <div className={styles.students_div}>
          <List {...filterProps} {...listProps} />
          {modalVisible && <Modal {...modalProps} />}
        </div>
      </div>
    </div>
  )
}

export default connect(({ students, loading }) => ({ students, loading }))(Students)
