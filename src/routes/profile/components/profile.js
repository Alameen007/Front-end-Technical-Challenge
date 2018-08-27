import React from 'react'
import { connect } from 'dva'
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

  componentDidMount () {
    const id = window.location.hash.substring(10)

    this.props.dispatch({ type: 'students/getStudentById', id })
  }


  render () {
    const {
      onUpdate, modalVisible, info, ...modalProps
    } = this.props
    const fullName = `${info.firstName} ${info.lastName} ${info.otherNames}`
    const sessionDate = `${moment(info.dateOfAdmission)._d.getDay() + 1}-${moment(info.dateOfAdmission)._d.getMonth() + 1}-${moment(info.dateOfAdmission)._d.getFullYear()}`
    return (
      <div className={styles.profile}>
        <Row>
          <Col>
            <Row>
              <Col span={12}>
                <h2 className={styles.student_fullName}>{`${fullName.toUpperCase()} - ${info.studentId}`}</h2>
                <p className={styles.session}><span style={{ fontWeight: 'bold' }}>Session:</span> {`${info.sessionOfAdmission} (${sessionDate})`}</p>
              </Col>
              <Col span={4} offset={8} style={{ textAlign: 'right' }} />
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
            Coming Soon
          </TabPane>
          <TabPane tab="Mother's Info" key="3">
          Coming Soon
          </TabPane>
          <TabPane tab="Guardin's Info" key="4">
          Coming Soon
          </TabPane>
          <TabPane tab="Medical Information" key="5">
          Coming Soon
          </TabPane>

        </Tabs>
        {modalVisible && <Modal {...modalProps} />}
      </div>
    )
  }
}

export default connect(({ students }) => ({ students }))(Profile)
