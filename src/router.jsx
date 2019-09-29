import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Layout from './layout/index.jsx'
import Home from './views/home/index.jsx'
import Customer from './views/customer/index.jsx'
import Rank from './views/rank/index.jsx'
import Select from './views/select/index.jsx'
import Category from './views/category/index.jsx'
export default class router extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/index" component={Home} exact />
          <Route
            path="/"
            render={() => {
              return (
                <Layout>
                  <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/customer" component={Customer} />
                    <Route path="/rank" component={Rank} />
                    <Route path="/select" component={Select} />
                    <Route path="/category" component={Category} />
                    <Redirect to="/home" />
                  </Switch>
                </Layout>
              )
            }}
          />
        </Switch>
      </HashRouter>
    )
  }
}
