import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Nav from '../components/nav/index.jsx'
import Welcome from '../components/welcome/index.jsx'
export default class Layout extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={4}>
            <Nav />
          </Col>
          <Col span={20} style={{ overflow: 'hidden', height: '100vh' }}>
            <Welcome />
            <div
              style={{
                backgroundColor: '#f5f5f5',
                minHeight: 'calc(100vh - 50px)',
                padding: '36px 40px 0',
                boxSizing: 'border-box'
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
