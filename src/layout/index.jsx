import React, { Component } from 'react'
import { Row, Col } from 'antd'

export default class Layout extends Component {
  render() {
    return (
      <Row>
        <Col span={5}></Col>
        <Col span={19}>col-12</Col>
      </Row>
    )
  }
}
