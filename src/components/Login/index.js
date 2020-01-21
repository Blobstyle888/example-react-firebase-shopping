import React from 'react'

import firebase from '../firebase'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      currentUser: null,
      errorMessage: ''
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ currentUser: user })
      }
    })
  }

  onLogout = e => {
    e.preventDefault()
    firebase
      .auth()
      .signOut()
      .then(response => {
        this.setState({
          currentUser: null,
          errorMessage: ''
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  onHandleSubmit = e => {
    e.preventDefault()

    const { email, password } = this.state

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        this.setState({
          currentUser: response.user
        })
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
  onInputChange = e => {
    const { value, name } = e.target

    this.setState({
      [name]: value
    })
  }
  render() {
    const { currentUser } = this.state

    if (currentUser) {
      return (
        <p>
          Hello {currentUser.email}{' '}
          <button onClick={this.onLogout}>Logout</button>
        </p>
      )
    }

    return (
      <section className="section container">
        <div className="columns is-centered">
          <div className="column is-half">
            <form onSubmit={this.onHandleSubmit}>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    name="email"
                    onChange={this.onInputChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    name="password"
                    onChange={this.onInputChange}
                  />
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-link">Submit</button>
                </div>
                <div className="control">
                  <button className="button is-text">Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default LoginForm
