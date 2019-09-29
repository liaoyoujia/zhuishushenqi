import React, { Component } from 'react'
import { Icon } from 'antd'
import { home } from '../../http/api/home'
import './index.css'
export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return <div className="home">测试</div>
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
