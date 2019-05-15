import React, { Component } from 'react'
import { Row, Col } from 'antd'
// import Nav from '../components/nav/index.jsx'
import Login from '../views/login/index'
export default class Layout extends Component {
  render() {
    return (
      <div>
        {/* <Row>
       <Col span={4}>
          <Nav />
        </Col>
        <Col span={20}>col-121</Col> 
     </Row>*/}
        <Login>3123123</Login>
      </div>
    )
  }
}
