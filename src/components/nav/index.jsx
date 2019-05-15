import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import routerDetail from '../../config/routerDetail'
import './index.css'
const SubMenu = Menu.SubMenu
export default class Nav extends Component {
  // 渲染菜單
  renderMenu(data) {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            }
          >
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.key} title={item.title}>
          <Icon type={item.icon} />
          {item.title}
        </Menu.Item>
      )
    })
  }

  render() {
    return (
      <Menu
        mode="inline"
        // openKeys={this.state.openKeys}
        // onOpenChange={this.onOpenChange}
        theme="dark"
        className="navBox"
      >
        {this.renderMenu(routerDetail)}
      </Menu>
    )
  }
}
