import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { Form, Input, Select, Radio, Row, Col, DatePicker, Upload, Button, Icon } from 'antd'
import { connect } from 'dva'

const { RangePicker } = DatePicker
const FormItem = Form.Item
const RadioButton = Radio.Button
const RadioGroup = Radio.Group
const { Option } = Select
const formItemLayout = {
  labelCol: {
    span: 9,
  },
  wrapperCol: {
    span: 11,
  },
}

const step1 = ({ 
  currentItem,
  dispatch,
  form: { getFieldDecorator },
}) => {
  console.log(currentItem)

  const handleStudentId = (event) => {
    const { target } = event
    const { value } = target
    currentItem.studentId = value
    const payload = {
      currentItem,
    }

    dispatch({ type: 'students/save', payload })
  }


  const handleFirstName = (event) => {
    const { target } = event
    const { value } = target
    currentItem.firstName = value
    const payload = {
      currentItem,
    }

    dispatch({ type: 'students/save', payload })
  }

  const handleLastName = (event) => {
    const { target } = event
    const { value } = target
    currentItem.lastName = value
    const payload = {
      currentItem,
    }

    dispatch({ type: 'students/save', payload })
  }

  const handleSessionOfAdmission = (event) => {
    currentItem.sessionOfAdmission.sessionId = event
    const payload = {
      currentItem,
    }

    dispatch({ type: 'students/save', payload })
  }

  const handledateOfAdmissionChange = (date, dateStrings) => {
    currentItem.dateOfAdmission = dateStrings
    const payload = {
      currentItem,
    }

    dispatch({ type: 'students/save', payload })
  }

  const handleDateofBirthChange = (date, dateStrings) => {
    currentItem.dob = dateStrings
    const payload = {
      currentItem,
    }

    dispatch({ type: 'students/save', payload })
  }

  const handleState = (event) => {
    currentItem.lga.state.stateId = event
    const payload = {
      currentItem,
    }

    dispatch({ type: 'students/save', payload })
  }

  const handleSex = (event) => {
    const { target } = event
    const { value } = target
    currentItem.sex = value
    const payload = {
      currentItem,
    }

    dispatch({ type: 'students/save', payload })
  }

  const handleLGA = (event) => {
    currentItem.lga.lgaName = event
    const payload = {
      currentItem,
    }

    dispatch({ type: 'students/save', payload })
  }

  const handleReligion = (event) => {
    currentItem.religion = event
    const payload = {
      currentItem,
    }

    dispatch({ type: 'students/save', payload })
  }

  const handleNationality1 = (event) => {
    currentItem.country1Nationality.countryName = event
    const payload = {
      currentItem,
    }

    dispatch({ type: 'students/save', payload })
  }

  const handleNationality2 = (event) => {
    currentItem.nationality2 = event
    const payload = {
      currentItem,
    }

    dispatch({ type: 'students/save', payload })
  }

  const handleOtherName = (event) => {
    const { target } = event
    const { value } = target
    currentItem.otherNames = value
    const payload = {
      currentItem,
    }

    dispatch({ type: 'students/save', payload })
  }


  const handleHobby = (event) => {
    const { target } = event
    const { value } = target
    currentItem.hobby = value
    const payload = {
      currentItem,
    }

    dispatch({ type: 'students/save', payload })
  }
  const handleSelfEsteem = (event) => {
    const { target } = event
    const { value } = target
    currentItem.selfEsteem = value
    const payload = {
      currentItem,
    }

    dispatch({ type: 'students/save', payload })
  }

  const dateFormat = 'DD-MM-YYYY'
  if (currentItem.dob === undefined) {
    currentItem.dob = moment(new Date()).format('DD-MM-YYYY')
  }
  if (currentItem.dateOfAdmission === undefined) {
    currentItem.dateOfAdmission = moment(new Date()).format('DD-MM-YYYY')
  }

  if (currentItem.country1Nationality === undefined) {
    currentItem.country1Nationality = {}
  }

  if (currentItem.lga === undefined) {
    currentItem.lga = {
      state: {

      },
    }
  }


  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem label="Student ID" hasFeedback >
            {getFieldDecorator('studentId', {
          initialValue: currentItem.studentId,
          rules: [
            {
              required: true,
              message: 'Please input an Student ID!',
            },
          ],
        })(<Input onBlur={handleStudentId} />)}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="Session of Admission" hasFeedback>
            {getFieldDecorator('sessionOfAdm', {
        initialValue: currentItem.sessionOfAdmission.sessionId,
rules: [
  {
    required: true,
    message: 'Please select your Session of Admission!',
  },
],
})(<Select placeholder="Select Session" onChange={handleSessionOfAdmission}>
  <Option value="NIGERIA">NIGERIA</Option>
  <Option value="BENIN">BENIN</Option>
  <Option value="TOGO">TOGO</Option>
  <Option value="AUSTRIA">AUSTRIA</Option>
  <Option value="GERMANY">GERMANY</Option>
  <Option value="SOUTH AFRICA">SOUTH AFRICA</Option>
  <Option value="FRANCE">FRANCE</Option>
  <Option value="SPAIN">SPAIN</Option>
  <Option value="CAMEROON">CAMEROON</Option>
  <Option value="ANGOLA">ANGOLA</Option>
  <Option value="COTE D'IVOIRE">COTE D'IVOIRE</Option>
  <Option value="GHANA">GHANA</Option>
  <Option value="LIBERIA">LIBERIA</Option>
  <Option value="MOZAMBIQUE">MOZAMBIQUE</Option>
  <Option value="SIERRA LEONE">SIERRA LEONE</Option>
  <Option value="GUINEA">GUINEA</Option>
  <Option value="GUINEA-BISSAU">GUINEA-BISSAU</Option>
  <Option value="SENEGAL">SENEGAL</Option>
  <Option value="GABON">GABON</Option>
  <Option value="EQUATORIAL-GUINEA">EQUATORIAL-GUINEA</Option>
  <Option value="REPUBLIC OF THE CONGO">REPUBLIC OF THE CONGO</Option>
</Select>)}
          </FormItem>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <FormItem label="First Name" hasFeedback >
            {getFieldDecorator('firstName', {
      initialValue: currentItem.firstName,
      rules: [
        {
          required: true,
          message: 'Please input your First name!',
          whitespace: true,
        },
      ],
    })(<Input onBlur={handleFirstName} />)}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="Date of Admission" hasFeedback>
            {getFieldDecorator('dateOfAdmission', {
        initialValue: moment(currentItem.dateOfAdmission, 'DD-MM-YYYY'),
  rules: [
    {
      required: true,
      message: 'Please select your Date of Admission!',
    },
  ],
})(<DatePicker onChange={handledateOfAdmissionChange} style={{ width: '100%' }} placeholder="Please select values" format={dateFormat} />)}
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem label="Last Name" hasFeedback >
            {getFieldDecorator('lastName', {
      initialValue: currentItem.lastName,
      rules: [
        {
          required: true,
          message: 'Please input your Last name!',
          whitespace: true,
        },
      ],
    })(<Input onBlur={handleLastName} />)}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="State Of Origin" hasFeedback>
            {getFieldDecorator('state', {
            initialValue: currentItem.lga.state.stateId || '',
      rules: [
      ],
    })(<Select placeholder="Select State" onChange={handleState} >
      <Option value="ABIA">ABIA</Option>
      <Option value="ADAMAWA">ADAMAWA</Option>
      <Option value="AKWA IBOM">AKWA IBOM</Option>
      <Option value="ANAMBRA">ANAMBRA</Option>
      <Option value="BAUCHI">BAUCHI</Option>
      <Option value="BAYELSA">BAYELSA</Option>
      <Option value="BENUE">BENUE</Option>
      <Option value="BORNO">BORNO</Option>
      <Option value="CROSS RIVER">CROSS RIVER</Option>
      <Option value="DELTA">DELTA</Option>
      <Option value="EBONYI">EBONYI</Option>
      <Option value="EDO">EDO</Option>
      <Option value="EKITI">EKITI</Option>
      <Option value="ENUGU">ENUGU</Option>
      <Option value="GOMBE">GOMBE</Option>
      <Option value="IMO">IMO</Option>
      <Option value="JIGAWA">JIGAWA</Option>
      <Option value="KADUNA">KADUNA</Option>
      <Option value="KANO">KANO</Option>
      <Option value="KATSINA">KATSINA</Option>
      <Option value="KEBBI">KEBBI</Option>
      <Option value="KG">KOGI</Option>
      <Option value="KWARA">KWARA</Option>
      <Option value="LAGOS">LAGOS</Option>
      <Option value="NASSARAWA">NASSARAWA</Option>
      <Option value="NIGER">NIGER</Option>
      <Option value="OGUN">OGUN</Option>
      <Option value="ONDO">ONDO</Option>
      <Option value="OSUN">OSUN</Option>
      <Option value="OYO">OYO</Option>
      <Option value="PLATEAU">PLATEAU</Option>
      <Option value="RIVERS">RIVERS</Option>
      <Option value="SOKOTO">SOKOTO</Option>
      <Option value="TARABA">TARABA</Option>
      <Option value="YOBE">YOBE</Option>
      <Option value="ZAMFARA">ZAMFARA</Option>
    </Select>)}
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem label="Gender" hasFeedback >
            {getFieldDecorator('gender', {
      initialValue: currentItem.sex,
      rules: [
        {
          required: true,
          message: 'Please select your Gender!',
        },
      ],
    })(<Radio.Group onChange={handleSex} >
      <Radio value="M">Male</Radio>
      <Radio value="F">Female</Radio>
    </Radio.Group>)}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="LGA Of Origin" hasFeedback>
            {getFieldDecorator('lga', {
        initialValue: currentItem.lga.lgaName || '',
  rules: [
  ],
})(<Select placeholder="Select LGA" onChange={handleLGA} >
  <Option value="ABIA">ABIA</Option>
  <Option value="ADAMAWA">ADAMAWA</Option>
  <Option value="AKWA IBOM">AKWA IBOM</Option>
  <Option value="ANAMBRA">ANAMBRA</Option>
  <Option value="BAUCHI">BAUCHI</Option>
  <Option value="BAYELSA">BAYELSA</Option>
  <Option value="BENUE">BENUE</Option>
  <Option value="BORNO">BORNO</Option>
  <Option value="CROSS RIVER">CROSS RIVER</Option>
  <Option value="DELTA">DELTA</Option>
  <Option value="EBONYI">EBONYI</Option>
  <Option value="EDO">EDO</Option>
  <Option value="EKITI">EKITI</Option>
  <Option value="ENUGU">ENUGU</Option>
  <Option value="GOMBE">GOMBE</Option>
  <Option value="IMO">IMO</Option>
  <Option value="JIGAWA">JIGAWA</Option>
  <Option value="KADUNA">KADUNA</Option>
  <Option value="KANO">KANO</Option>
  <Option value="KATSINA">KATSINA</Option>
  <Option value="KEBBI">KEBBI</Option>
  <Option value="KOGI">KOGI</Option>
  <Option value="KWARA">KWARA</Option>
  <Option value="LAGOS">LAGOS</Option>
  <Option value="NASSARAWA">NASSARAWA</Option>
  <Option value="NIGER">NIGER</Option>
  <Option value="OGUN">OGUN</Option>
  <Option value="ONDO">ONDO</Option>
  <Option value="OSUN">OSUN</Option>
  <Option value="OYO">OYO</Option>
  <Option value="PLATEAU">PLATEAU</Option>
  <Option value="RIVERS">RIVERS</Option>
  <Option value="SOKOTO">SOKOTO</Option>
  <Option value="TARABA">TARABA</Option>
  <Option value="YOBE">YOBE</Option>
  <Option value="ZAMFARA">ZAMFARA</Option>
</Select>)}
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem label="Other Name" hasFeedback >
            {getFieldDecorator('otherName', {
initialValue: currentItem.otherNames,
rules: [

],
})(<Input onBlur={handleOtherName} />)}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="Religion" hasFeedback>
            {getFieldDecorator('religion', {
        initialValue: currentItem.religion || '',
  rules: [
  ],
})(<Select placeholder="select Religion" onChange={handleReligion}>
  <Option value="Islam">ISLAM</Option>
  <Option value="CHRISTIANITY">CHRISTIANITY</Option>
  <Option value="OTHER">OTHER</Option>
</Select>)}
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem label="Date of Birth" hasFeedback>
            {getFieldDecorator('dob', {
            initialValue: moment(currentItem.dob, 'DD-MM-YYYY'),
      rules: [
        {
          required: true,
          message: 'Please select your Date of Birth!',
        },
      ],
    })(<DatePicker style={{ width: '100%' }} onChange={handleDateofBirthChange} format={dateFormat} />)}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="Hobby" hasFeedback >
            {getFieldDecorator('hobby', {
initialValue: currentItem.hobby || '',
rules: [

],
})(<Input onBlur={handleHobby} />)}
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem label="Nationality 1" hasFeedback>
            {getFieldDecorator('countryName', {
            initialValue: currentItem.country1Nationality.countryName || '',
  rules: [
  ],
})(<Select placeholder="Select country" onChange={handleNationality1}>
  <Option value="NIGERIA">NIGERIA</Option>
  <Option value="BENIN">BENIN</Option>
  <Option value="TOGO">TOGO</Option>
  <Option value="AUSTRIA">AUSTRIA</Option>
  <Option value="GERMANY">GERMANY</Option>
  <Option value="SOUTH AFRICA">SOUTH AFRICA</Option>
  <Option value="FRANCE">FRANCE</Option>
  <Option value="SPAIN">SPAIN</Option>
  <Option value="CAMEROON">CAMEROON</Option>
  <Option value="ANGOLA">ANGOLA</Option>
  <Option value="COTE D'IVOIRE">COTE D'IVOIRE</Option>
  <Option value="GHANA">GHANA</Option>
  <Option value="LIBERIA">LIBERIA</Option>
  <Option value="MOZAMBIQUE">MOZAMBIQUE</Option>
  <Option value="SIERRA LEONE">SIERRA LEONE</Option>
  <Option value="GUINEA">GUINEA</Option>
  <Option value="GUINEA-BISSAU">GUINEA-BISSAU</Option>
  <Option value="SENEGAL">SENEGAL</Option>
  <Option value="GABON">GABON</Option>
  <Option value="EQUATORIAL-GUINEA">EQUATORIAL-GUINEA</Option>
  <Option value="REPUBLIC OF THE CONGO">REPUBLIC OF THE CONGO</Option>
</Select>)}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="Self Esteem" hasFeedback >
            {getFieldDecorator('selfEsteem', {
initialValue: currentItem.selfEsteem,
rules: [

],
})(<Input onBlur={handleSelfEsteem} />)}
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem label="Nationality 2" hasFeedback>
            {getFieldDecorator('nationality2', {
        initialValue: currentItem.nationality2 || '',
rules: [
],
})(<Select placeholder="Select country" onChange={handleNationality2} >
  <Option value="NIGERIA">NIGERIA</Option>
  <Option value="BENIN">BENIN</Option>
  <Option value="TOGO">TOGO</Option>
  <Option value="AUSTRIA">AUSTRIA</Option>
  <Option value="GERMANY">GERMANY</Option>
  <Option value="SOUTH AFRICA">SOUTH AFRICA</Option>
  <Option value="FRANCE">FRANCE</Option>
  <Option value="SPAIN">SPAIN</Option>
  <Option value="CAMEROON">CAMEROON</Option>
  <Option value="ANGOLA">ANGOLA</Option>
  <Option value="COTE D'IVOIRE">COTE D'IVOIRE</Option>
  <Option value="GHANA">GHANA</Option>
  <Option value="LIBERIA">LIBERIA</Option>
  <Option value="MOZAMBIQUE">MOZAMBIQUE</Option>
  <Option value="SIERRA LEONE">SIERRA LEONE</Option>
  <Option value="GUINEA">GUINEA</Option>
  <Option value="GUINEA-BISSAU">GUINEA-BISSAU</Option>
  <Option value="SENEGAL">SENEGAL</Option>
  <Option value="GABON">GABON</Option>
  <Option value="EQUATORIAL-GUINEA">EQUATORIAL-GUINEA</Option>
  <Option value="REPUBLIC OF THE CONGO">REPUBLIC OF THE CONGO</Option>
</Select>)}
          </FormItem>
        </Col>
      </Row>

    </div>
  )
}

export default connect(({ students }) => ({ students }))(Form.create()(step1))
