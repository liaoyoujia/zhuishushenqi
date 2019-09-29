import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './index.css'
import logo from '../assert/imgs/logo.png'
import lj1 from '../assert/imgs/lianjie1.png'
import lj2 from '../assert/imgs/lianjie2.png'
import lj3 from '../assert/imgs/lianjie3.jpg'
import lj4 from '../assert/imgs/lianjie4.jpg'
import lj5 from '../assert/imgs/lianjie5.png'
import { Row, Col, Input, Tabs } from 'antd'
const { Search } = Input
const { TabPane } = Tabs
class Layout extends Component {
  render() {
    return (
      <div className="main">
        <Row className="header-top"></Row>
        <Row>
          <Col span={16} offset={4}>
            <Header></Header>
          </Col>
        </Row>
        <Row className="header-tab">
          <Col span={16} offset={4}>
            <Tab
              children={this.props.children}
              history={this.props.history}
            ></Tab>
          </Col>
        </Row>
        <Row>
          <Col span={16} offset={4}>
            <Footer></Footer>
          </Col>
        </Row>
      </div>
    )
  }
}

const Header = function() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box',
        padding: '20px 0'
      }}
    >
      <img
        src={logo}
        alt=""
        style={{ display: 'block', width: '175px', height: '60px' }}
      />
      <Search
        placeholder="搜索书名或作者"
        style={{ width: '280px' }}
        onSearch={value => console.log(value)}
        enterButton
      />
    </div>
  )
}

const Tab = function(props) {
  const toggleTab = e => {
    // eslint-disable-next-line default-case
    switch (e) {
      case 'index':
        props.history.push('/home')
        break
      case 'select':
        props.history.push('/select')
        break
      case 'category':
        props.history.push('/category')
        break
      case 'rank':
        props.history.push('/rank')
        break
      case 'customer':
        props.history.push('/customer')
    }
  }
  return (
    <div style={{ width: '100%' }}>
      <Tabs type="card" onTabClick={toggleTab}>
        <TabPane tab="首页" key="index">
          {props.children}
        </TabPane>
        <TabPane tab="精选" key="select">
          {props.children}
        </TabPane>
        <TabPane tab="分类" key="category">
          {props.children}
        </TabPane>
        <TabPane tab="排行榜" key="rank">
          {props.children}
        </TabPane>
        <TabPane tab="客户端" key="customer">
          {props.children}
        </TabPane>
      </Tabs>
    </div>
  )
}
const Footer = function() {
  return (
    <div style={{ width: '100%' }}>
      <div style={{ width: '100%' }} className="footer">
        <span>友情链接:</span>
        <img src={lj1} alt="" className="footer-img" />
        <img src={lj2} alt="" className="footer-img" />
        <img src={lj3} alt="" className="footer-img" />
        <img src={lj4} alt="" className="footer-img" />
        <img src={lj5} alt="" className="footer-img" />
      </div>
      <div style={{ width: '100%', marginTop: '12px', marginBottom: '16px' }}>
        <span className="item">客户端</span>
        <span className="item">关于我们</span>
        <span className="item">联系我们</span>
        <span className="item">加入我们</span>
      </div>
      <div style={{ width: '100%' }}>
        <a href="javascript:;" className="beizhu">
          沪公网安备 31011202006103号
        </a>
      </div>
    </div>
  )
}

export default withRouter(Layout)
