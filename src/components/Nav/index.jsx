import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import menuDetail from './config/routerDetail.js'
import './index.css'
const SubMenu = Menu.SubMenu
export default class Nav extends Component {
  // 渲染菜单目录
  renderMenu(menu) {
    return menu.map(item => {
      if (item.children) {
        return <SubMenu>{this.renderMenu(item.children)}</SubMenu>
      }
      return <Menu.Item>{item}</Menu.Item>
    })
  }

  render() {
    return (
      <Menu
        mode="inline"
        theme="dark"
        className="menuBox"
        // openKeys={this.state.openKeys}
        // onOpenChange={this.onOpenChange}
        // style={{ width: 256 }}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
          }
        >
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>Navigation Two</span>
            </span>
          }
        >
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="setting" />
              <span>Navigation Three</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}
