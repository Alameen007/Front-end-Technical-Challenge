import React from 'react'
import moment from 'moment'
import { Button, Row, Col, Tabs } from 'antd'
import { Link } from 'dva/router'
import styles from '../style.css'
import StudentBio from './studentBio'
import Modal from '../../studentManagement/components/Modal'


const TabPane = Tabs.TabPane


export class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }


  render () {
    const {
      onUpdate, modalVisible, info, ...modalProps
    } = this.props
    const sessionDate = `${moment(info.dateOfAdmission)._d.getDay() + 1}-${moment(info.dateOfAdmission)._d.getMonth() + 1}-${moment(info.dateOfAdmission)._d.getFullYear()}`
    console.log(this.props)
    return (
      <div className={styles.profile}>
        <Row>
          <Col style={{ marginBottom: '16px' }}>
            <Row>
              <Col span={12}>
                <h2 className={styles.student_fullName}>{`${info.fullName} - ${info.studentId}`}</h2>
                <p className={styles.session}>{`${info.sessionOfAdmission.sessionId} (${sessionDate})`}</p>
              </Col>
              <Col span={4} offset={8} style={{ textAlign: 'right' }}>
                <Button onClick={onUpdate} size="large" type="primary" icon="edit">
              Edit Student
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>

        <Tabs
          defaultActiveKey="1"
          tabPosition="top"
        >
          <TabPane tab="Student's Biodata" key="1">
            <StudentBio info={info} />
          </TabPane>
          <TabPane tab="Father's Info" key="2">
            skjdhfdskh
          </TabPane>
          <TabPane tab="Mother's Info" key="3">
            skjdhfdskh
          </TabPane>
          <TabPane tab="Guardin's Info" key="4">
            skjdhfdskh
          </TabPane>
          <TabPane tab="Medical Information" key="5">
            skjdhfdskh
          </TabPane>

        </Tabs>
        {modalVisible && <Modal {...modalProps} />}
      </div>
    )
  }
}

export default Profile
