import React from 'react'
import { connect } from 'dva'
import moment from 'moment'
import { Button, Row, Col, Tabs, message, Upload } from 'antd'
import { Link } from 'dva/router'

import person from '../../../assets/images/person.jpg'
import styles from '../style.css'

const TabPane = Tabs.TabPane

const getImageBase64 = (img, callback) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

export class StudentBioData extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  beforeUpload = (file) => {
    // Validate file
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error('Image must be smaller than 2MB!')
      return false
    }

    getImageBase64(file, imageUrl => {
      const { info } = this.props

      info.image = imageUrl
      const payload = {
        info,
      }
      this.props.dispatch({ type: 'students/save', payload })
    })

    return false
  }


  render () {
    const { info } = this.props
    if (info.country1Nationality === undefined) {
      info.country1Nationality = {}
    }

    if (info.lga === undefined) {
      info.lga = {
        state: {
        },
      }
    }

    if (info.addressState === undefined) {
      info.addressState = {}
    }
  
    const dob = `${moment(info.dob)._d.getDay() + 1}-${moment(info.dob)._d.getMonth() + 1}-${moment(info.dob)._d.getFullYear()}`
    return (
      <div className={styles.studentBio}>
        <div className={styles.profile_pic}>
          {
          (this.props.info.image === undefined || this.props.info.image === '') ?
            <img src={person} alt="" /> : <img src={this.props.info.image} alt="" />
         }
          <Upload
            className="avatar-uploader"
            name="avatar"
            showUploadList={false}
            beforeUpload={this.beforeUpload}
            onChange={this.handleImage}
          >
            {
              <Button icon="upload" type="primary">Upload Image</Button>
               }
          </Upload>

        </div>
        <div className={styles.bio_data}>
          <Row gutter={16}>
            <Col span={12}>
              <h4>
                <span>Gender:</span> {info.sex}
              </h4></Col>
            <Col span={12}>
              <h4>
                <span>Date Of Birth:</span> {dob}
              </h4></Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <h4>
                <span>State Of Origin:</span> {info.lga.state.stateName}
              </h4>
            </Col>
            <Col span={12}>
              <h4>
                <span>LGA Of Origin:</span> {info.lga.lgaName}
              </h4>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <h4>
                <span>Nationality 1:</span> {info.country1Nationality.countryName}
              </h4>
            </Col>
            <Col span={12}>
              <h4>
                <span>Nationality 2:</span>
              </h4></Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <h4>
                <span>Religion:</span> {info.religion}
              </h4>
            </Col>
            <Col span={12}>
              <h4>
                <span>Hobby:</span> {info.hobby}
              </h4></Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <h4>
                <span>Self Esteem:</span> {info.selfEsteem}
              </h4>
            </Col>
          </Row>
          <hr />
          <Row gutter={16}>
            <Col span={12}>
              <h4>
                <span>Number of Siblings:</span> {info.noOfSiblings}
              </h4>
            </Col>
            <Col span={12}>
              <h4>
                <span>Percentage:</span> {info.percentage}
              </h4></Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <h4>
                <span>Other of Birth:</span> {info.orderOfBirth}
              </h4>
            </Col>
            <Col span={12}>
              <h4>
                <span>Boarding:</span> {info.boarding}
              </h4></Col>
          </Row>
          <hr />
          <Row gutter={16}>
            <Col span={12}>
              <h4>
                <span>Address Line 1:</span> {info.address1}
              </h4>
            </Col>
            <Col span={12}>
              <h4>
                <span>Address Line 2:</span> {info.address2}
              </h4></Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <h4>
                <span>City:</span> {info.city}
              </h4>
            </Col>
            <Col span={12}>
              <h4>
                <span>State:</span> {info.addressState.stateName}
              </h4></Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <h4>
                <span>P.O Box:</span>
              </h4>
            </Col>
            <Col span={12}>
              <h4>
                <span>Phone:</span> {info.phone}
              </h4></Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <h4>
                <span>Email:</span> {info.email}
              </h4>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default connect(({ students }) => ({ students }))(StudentBioData)
