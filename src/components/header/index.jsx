import React, { Component } from 'react'
import { Row, Col } from 'antd';
import './index.css'
export default class Header extends Component {

  render() {
    return (
      <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
    )
  }
}
