import React from 'react'

import { login } from '../../../actions/auth'

import LoginForm from '../components/LoginForm'

const handleSubmit = (values, dispatch) => {
  const { email, password } = values
  dispatch(login(email, password))
}

export default () => (
  <LoginForm
    onSubmit={handleSubmit}
    title="Please login to continue"
    isLoginForm={true}
  />
)
