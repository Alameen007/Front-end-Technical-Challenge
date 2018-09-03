import React from 'react'
import PropTypes from 'prop-types'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import { Button, Row, Form, Input, Tabs, Icon, Col, Checkbox } from 'antd'
import styles from './style.css'
import schoolLogo from './../../assets/images/school_logo1.jpg'


const { TabPane } = Tabs
const FormItem = Form.Item


class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount () {
    const token = localStorage.getItem('token')

    this.props.dispatch({ type: 'login/checkToken', token })
  }

  handleSubmit = () => {
    this.props.form.validateFields((errors, values) => {
      if (errors) {
        return
      }
      const { password, username } = values
      const admin = {
        password,
        username,
        tenant: 'safsms_demo',
      }

      this.props.dispatch({ type: 'login/login', admin })
    })
  }

  render () {
    const { loginLoading } = this.props.login
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <div className={styles.login_wrapper}>
          <div className={styles.login_container}>
            <div className={styles.login_header}>
              <img src={schoolLogo} alt="" className={styles.school_logo} />
              <h2>FLEXISAF ACADEMY</h2>
            </div>
            <Form className={styles.login_form}>
              <FormItem>
                {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />)}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />)}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
                <a className={styles.login_form_forgot} href="">Forgot password</a>
                <Button onClick={this.handleSubmit} loading={loginLoading} type="primary" htmlType="submit" className={styles.login_form_button}>
            Log in
                </Button>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = {

}

export default connect(({ login, loading }) => ({ login, loading }))(Form.create()(Login))
