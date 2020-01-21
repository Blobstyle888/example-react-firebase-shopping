import firebase from '../../firebase'
import { createActionSet } from '../../helpers'

import { push } from 'connected-react-router'

const { auth } = firebase

export const USER_SESSION = createActionSet('USER_SESSION')
export const USER_REGISTER = createActionSet('USER_REGISTER')
export const USER_LOGOUT = createActionSet('USER_LOGOUT')
export const FETCH_CURRENT_USER = createActionSet('FETCH_CURRENT_USER')

export const login = (email, password) => async dispatch => {
  dispatch({
    type: USER_SESSION.PENDING
  })

  try {
    const response = await auth.signInWithEmailAndPassword(email, password)
    const { user } = response
    const currentUser = {
      email: user.email,
      name: user.displayName
    }

    dispatch({
      type: USER_SESSION.SUCCESS,
      payload: currentUser
    })

    localStorage.setItem('currenetUser', currentUser)

    dispatch(push('/'))
  } catch (error) {
    dispatch({
      type: USER_SESSION.FAILED,
      error
    })
  }
}

export const register = (email, password) => async dispatch => {
  dispatch({
    type: USER_REGISTER.PENDING
  })

  try {
    const currentUser = await auth.createUserWithEmailAndPassword(
      email,
      password
    )
    dispatch({
      type: USER_REGISTER.SUCCESS,
      payload: currentUser
    })

    localStorage.setItem('currenetUser', currentUser)
    dispatch(push('/'))
  } catch (error) {
    dispatch({
      type: USER_REGISTER.FAILED,
      error
    })
  }
}

export const logout = () => async dispatch => {
  dispatch({
    type: USER_LOGOUT.PENDING
  })

  try {
    await auth.signOut()

    dispatch({
      type: USER_LOGOUT.SUCCESS
    })
  } catch (error) {
    dispatch({
      type: USER_LOGOUT.FAILED,
      error
    })
  }
}

export const fetchCurrentUser = () => async dispatch => {
  dispatch({
    type: FETCH_CURRENT_USER.PENDING
  })

  auth.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: FETCH_CURRENT_USER.SUCCESS,
        payload: user
      })
      localStorage.setItem('currenetUser', user)
    } else {
      dispatch({
        type: FETCH_CURRENT_USER.FAILED
      })
    }
  })
}
