import React, { Component } from 'react'
import { Icon } from 'antd'
import { NavLink } from 'react-router-dom'

import './index.css'
export default class index extends Component {
  render() {
    return (
      <div className="home">
        <Nublock Number="3123" icon="shop" catory="商品总数" cls="brown" />
        <Nublock
          Number="4123"
          icon="ordered-list"
          catory="订单总数"
          cls="green"
        />
        <Nublock Number="5123" icon="user" catory="用户总数" cls="blue" />
      </div>
    )
  }
}
const Nublock = props => {
  const { Number, icon, catory, cls } = props
  return (
    <NavLink className={`nublock ${cls}`}>
      <p className="number">{Number}</p>
      <div className="detail">
        <Icon type={icon} />
        <span>{catory}</span>
      </div>
    </NavLink>
  )
}
