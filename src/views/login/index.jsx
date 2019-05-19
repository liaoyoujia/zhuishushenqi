import React from 'react'
import { Form, Icon, Input, Button, Checkbox, Row, Col, message } from 'antd'
import './index.css'
import errObj from '../../config/errArr'
import { login } from '../../http/api/user'
import Storage from '../../config/storage'
const storage = new Storage()
class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values, 1231313)
        const { username, password } = values
        login({ username, password }).then(res => {
          if (res.data.status === 0) {
            message.success('登录成功！')
            storage.setStorage('user', res.data.data)
            this.props.history.push('/home')
          } else {
            message.error('登录失败！')
            return false
          }
        })
      } else {
        let errArr = Object.keys(err)
        return errArr.forEach(item => {
          item === 'username' && message.error(`请输入${errObj[item]}`)
          item === 'password' && message.error(`请输入${errObj[item]}`)
        })
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="loginBox">
        <h1 className="login">登录</h1>
        <Row type="flex" justify="center" align="middle">
          <Col xs={20} md={12} lg={6}>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [
                    {
                      required: true,
                      message: '用户名不能为空'
                    },
                    {
                      min: 5,
                      max: 10,
                      message: '长度不在范围内'
                    },
                    {
                      pattern: /^\w/g,
                      message: '必须是字母或者数字'
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    placeholder="用户名"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码！' }]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    type="password"
                    placeholder="密码"
                  />
                )}
              </Form.Item>
              <Form.Item>
                <div className="remember">
                  {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true
                  })(<Checkbox>记住密码</Checkbox>)}
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    登录
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LoginForm)

export default WrappedNormalLoginForm
