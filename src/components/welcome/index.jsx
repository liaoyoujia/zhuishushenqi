import React, { Component } from 'react'
import './index.css'
import { withRouter } from 'react-router-dom'

class index extends Component {
  // 退出登录
  loginOut = () => {
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="welcome">
        <h5 className="title">首页</h5>
        <div className="admin">
          <i className="icon iconfont icon-ren111" />
          <span>欢迎,admin</span>
          <i
            className="icon iconfont icon-xiasanjiaoxing"
            onClick={this.loginOut}
          />
        </div>
      </div>
    )
  }
}

export default withRouter(index)
