import React from 'react'

import { register } from '../../../actions/auth'

import LoginForm from '../components/LoginForm'

const handleSubmit = (values, dispatch) => {
  const { email, password } = values

  dispatch(register(email, password))
}

export default () => (
  <LoginForm
    onSubmit={handleSubmit}
    title="Please register"
    isLoginForm={false}
  />
)
