import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Nav from '../components/Nav/index.jsx'

export default class Layout extends Component {
  render() {
    return (
      <Row>
        <Col span={4}><Nav/></Col>
        <Col span={20}>col-12</Col>
      </Row>
    )
  }
}
