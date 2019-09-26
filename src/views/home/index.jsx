import React, { Component } from 'react'
import { Icon } from 'antd'
import { NavLink } from 'react-router-dom'
import { home } from '../../http/api/home'
import './index.css'
export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = { blocks: {} }
  }
  render() {
    let { blocks } = this.state
    return (
      <div className="home">
        
      </div>
    )
  }
  getBlockData = () => {
    home().then(res => {
      if (res.data.data) {
        this.setState({ blocks: res.data.data })
      }
    })
  }
  componentDidMount() {
    this.getBlockData()
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
