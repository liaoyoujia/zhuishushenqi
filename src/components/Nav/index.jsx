import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import menuDetail from '../../config/routerDetail'
import './index.css'
const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item
export default class Nav extends Component {
  // 渲染菜单目录
  renderMenu(menu) {
    return menu.map(item => {
      if (item.children) {
        return <SubMenu
        key={item.key}
        title={
          <span>
            <Icon type={item.icon} />
            {item.title}
          </span>
        }>
        {this.renderMenu(item.children)}</SubMenu>
      }
      return (
        <MenuItem key={item.key} title={item.title}>
            {/* <NavLink to={item.key}> */}
              <Icon type={item.icon} />
              {item.title}
            {/* </NavLink> */}
          </MenuItem>
      )
    })
  }

  render() {
    return (
      <Menu
        mode="inline"
        theme="dark"
        className="menuBox"
      >{
        this.renderMenu(menuDetail)
      }
      </Menu>
    )
  }
}
