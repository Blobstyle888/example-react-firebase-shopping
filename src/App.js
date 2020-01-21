import React, { Component } from 'react'
import { connect } from 'react-redux'

// import './App.css'

import AppHeader from './components/AppHeader'
import AuthRoute from './views/auth/AuthRoute'
import HomeRoute from './views/home/HomeRoute'
import ProductRoute from './views/products/ProductRote'

import { fetchCurrentUser } from './actions/auth'

export class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(fetchCurrentUser())
    console.log('fetchCurrentUser > ', dispatch(fetchCurrentUser()))
  }
  render() {
    return (
      <div className="App">
        <AppHeader />
        <AuthRoute />
        <HomeRoute />
        <ProductRoute />
      </div>
    )
  }
}

export default connect()(App)
