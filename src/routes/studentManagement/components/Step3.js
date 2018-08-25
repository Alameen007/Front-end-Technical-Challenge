import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { Form, Input, Row, Col, Select } from 'antd'
import { connect } from 'dva'

const FormItem = Form.Item
const { TextArea } = Input
const { Option } = Select

const formItemLayout = {
  labelCol: {
    span: 9,
  },
  wrapperCol: {
    span: 11,
  },
}

const step2 = ({
  currentItem,
  dispatch,
  form: { getFieldDecorator },
}) => {
  const handleAddress1 = (event) => {
    const { target } = event
    const { value } = target
    currentItem.address1 = value
    const payload = {
      currentItem,
    }

    dispatch({ type: 'students/save', payload })
  }


  const handleAddress2 = (event) => {
    const { target } = event
    const { value } = target
    currentItem.address2 = value
    const payload = {
      currentItem,
    }

    dispatch({ type: 'students/save', payload })
  }

  const handleCity = (event) => {
    const { target } = event
    const { value } = target
    currentItem.city = value
    const payload = {
      currentItem,
    }

    dispatch({ type: 'students/save', payload })
  }

  const handlePOBox = (event) => {
    const { target } = event
    const { value } = target
    currentItem.box = value
    const payload = {
      currentItem,
    }

    dispatch({ type: 'students/save', payload })
  }

  const handlePhone = (event) => {
    const { target } = event
    const { value } = target
    currentItem.phone = value
    const payload = {
      currentItem,
    }

    dispatch({ type: 'students/save', payload })
  }

  const handleEmail = (event) => {
    const { target } = event
    const { value } = target
    currentItem.email = value
    const payload = {
      currentItem,
    }

    dispatch({ type: 'students/save', payload })
  }

  const handleState = (event) => {
    currentItem.addressState.stateName = event
    const payload = {
      currentItem,
    }

    dispatch({ type: 'students/save', payload })
  }

  if (currentItem.addressState === undefined) {
    currentItem.addressState = {}
  }

  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem label="Address Line 1" hasFeedback >
            {getFieldDecorator('address1', {
          initialValue: currentItem.address1,
          rules: [
          ],
        })(<TextArea onBlur={handleAddress1} />)}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="Address Line 2" hasFeedback >
            {getFieldDecorator('address2', {
      initialValue: currentItem.address2,
      rules: [
      ],
    })(<TextArea onBlur={handleAddress2} />)}
          </FormItem>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <FormItem label="City" hasFeedback >
            {getFieldDecorator('city', {
initialValue: currentItem.city,
rules: [
],
})(<Input onBlur={handleCity} />)}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="State" hasFeedback>
            {getFieldDecorator('state', {
    initialValue: currentItem.addressState.stateName,
  rules: [
  ],
  })(<Select placeholder="Select State" onChange={handleState}>
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
          <FormItem label="P.O Box" hasFeedback >
            {getFieldDecorator('box', {
initialValue: currentItem.box,
rules: [
],
})(<Input onBlur={handlePOBox} />)}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="Phone" hasFeedback >
            {getFieldDecorator('phone', {
initialValue: currentItem.phone,
rules: [
],
})(<Input onBlur={handlePhone} />)}
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem label="Email" hasFeedback >
            {getFieldDecorator('email', {
    initialValue: currentItem.email,
    rules: [
        {
            type: 'email',
        },
    ],
  })(<Input onBlur={handleEmail} />)}
          </FormItem>
        </Col>
      </Row>


    </div>
  )
}

export default connect(({ students }) => ({ students }))(Form.create()(step2))
