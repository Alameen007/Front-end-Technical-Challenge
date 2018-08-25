import React, { Component } from 'react'
import { Input, Modal, Form, Button, Select, DatePicker, Tooltip, Radio, Steps } from 'antd'

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import styles from './../style.css'

const RadioButton = Radio.Button
const RadioGroup = Radio.Group
const FormItem = Form.Item
const { Option } = Select
const Step = Steps.Step


class modal extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      current: 0,
    }
  }

  next () {
    const { form } = this.props
    form.validateFieldsAndScroll((err) => {
      if (!err) {
        const current = this.state.current + 1
        this.setState({ current })
      }
    })
  }
  prev () {
    const current = this.state.current - 1
    this.setState({ current })
  }
  render () {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
    } = this.props.form

    const {
      item = {}, onOk, onCancel, okText, ...modalProps
    } = this.props
    const handleOk = () => {
      // const {
      //   account_handler_department,
      //   account_handler_division,
      //   account_handler_person,
      //   building_no,
      //   city,
      //   company_name,
      //   country,
      //   credit_limit,
      //   credit_terms,
      //   email,
      //   email2,
      //   fax,
      //   industry,
      //   landline,
      //   landline2,
      //   liebherr_client,
      //   mobile,
      //   mobile2,
      //   office_type,
      //   payment_history,
      //   prefered_comm,
      //   reference,
      //   service_contract,
      //   spare_part_provider,
      //   state,
      //   status,
      //   street,
      //   website,
      // } = this.props.item

      // const data = {
      //   account_handler_department,
      //   account_handler_division,
      //   account_handler_person,
      //   building_no,
      //   city,
      //   company_name,
      //   country,
      //   credit_limit,
      //   credit_terms,
      //   email,
      //   email2,
      //   fax,
      //   industry,
      //   landline,
      //   landline2,
      //   liebherr_client,
      //   mobile,
      //   mobile2,
      //   office_type,
      //   payment_history,
      //   prefered_comm,
      //   reference,
      //   service_contract,
      //   spare_part_provider,
      //   state,
      //   status,
      //   street,
      //   website,
      // }

      // onOk(data)
    }

    const steps = [
      {
        title: 'Step 1',
        content: (
          <Step1
            form={this.props.form}
            currentItem={item}
          />
        ),
      },
      {
        title: 'Step 2',
        content: (
          <Step2
            form={this.props.form}
            currentItem={item}
          />
        ),
      },
      {
        title: 'Step 3',
        content: (
          <Step3
            form={this.props.form}
            currentItem={item}
          />
        ),
      },

    ]
    const modalOpts = {
      ...modalProps,
      // onOk: handleOk,
    }
    const { current } = this.state

    return (
      <Modal
        {...modalOpts}
        onCancel={onCancel}
        footer={[
          <div key="stepper">
            {this.state.current > 0 && (
            <Button
              style={{ 
                marginLeft: 8,
              }}
              onClick={() => this.prev()}
            >
              Previous
            </Button>
          )}
            {this.state.current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={handleOk}
              >
                {okText}
              </Button>
            )}
            {this.state.current < steps.length - 1 && (
              <Button type="primary" onClick={() => this.next()}>
                Next
              </Button>
            )}
          </div>,
        ]}
      >
        <Form layout="horizontal">
          <Steps current={current}>
            {steps.map(single => <Step key={single.title} title={single.title} />)}
          </Steps>
          <div className={styles.steps_content}>
            {steps[this.state.current].content}
          </div>
        </Form>
      </Modal>
    )
  }
}
export default Form.create()(modal)
