import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Layout from './layout/index.jsx'
import Login from './views/login/index.jsx'
import Home from './views/home/index.jsx'
export default class router extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} exact />
          <Route path="/" render={() => {
            return (
              <Layout>
                <Switch>
                  <Route path="/" component={Home}></Route>
                </Switch>
              </Layout>
            )
          }} />
        </Switch>
      </HashRouter>
    )
  }
}
