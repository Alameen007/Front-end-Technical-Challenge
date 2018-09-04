import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { Form, Input, Select, Radio, Row, Col, DatePicker, Upload, Button, Icon, Checkbox } from 'antd'
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

const step2 = ({
  currentItem,
  dispatch,
  form: { getFieldDecorator },
}) => {
  const handleNoOfSiblings = (event) => {
    const { target } = event
    const { value } = target
    currentItem.noOfSiblings = value
    const payload = {
      currentItem,
    }

    dispatch({ type: 'students/save', payload })
  }


  const handlePercentage = (event) => {
    const { target } = event
    const { value } = target
    currentItem.percentage = value
    const payload = {
      currentItem,
    }

    dispatch({ type: 'students/save', payload })
  }

  const handleOrderOfBirth = (event) => {
    const { target } = event
    const { value } = target
    currentItem.orderOfBirth = value
    const payload = {
      currentItem,
    }

    dispatch({ type: 'students/save', payload })
  }

  const handleBoarding = (event) => {
    const { target } = event
    const { value } = target
    currentItem.boarding = 0
    const payload = {
      currentItem,
    }

    dispatch({ type: 'students/save', payload })
  }


  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem label="Number of Siblings" hasFeedback >
            {getFieldDecorator('noOfSibling', {
          initialValue: currentItem.noOfSiblings,
          rules: [
          ],
        })(<Input onBlur={handleNoOfSiblings} />)}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="Percentage" hasFeedback >
            {getFieldDecorator('percentage', {
      initialValue: currentItem.percentage,
      rules: [
      ],
    })(<Input onBlur={handlePercentage} />)}
          </FormItem>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <FormItem label="Other of Birth" hasFeedback >
            {getFieldDecorator('orderOfBirth', {
      initialValue: currentItem.orderOfBirth,
      rules: [
      ],
    })(<Input onBlur={handleOrderOfBirth} />)}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="Boarding" hasFeedback >
            {getFieldDecorator('boarding', {
  initialValue: currentItem.boarding,
  rules: [
  ],
})(<Checkbox onChange={handleBoarding} />)}
          </FormItem>
        </Col>
      </Row>
    </div>
  )
}

export default connect(({ students }) => ({ students }))(Form.create()(step2))
