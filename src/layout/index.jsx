import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Nav from '../components/nav/index.jsx'
import Welcome from '../components/welcome/index.jsx'
import { callbackify } from 'util'
export default class Layout extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={4}>
            <Nav />
          </Col>
          <Col span={20}>
            <Welcome />
            <div
              style={{
                backgroundColor: '#eee',
                minHeight: 'calc(100vh - 50px)'
              }}
            >
              {this.props.children}
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
