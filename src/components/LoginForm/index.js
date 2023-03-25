import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', dataError: '', Loader: false}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = data => {
    this.setState({Loader: true, dataError: data.error_msg})
  }

  submitting = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const body = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(body),
    }

    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    console.log(response, data)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data)
    }
  }

  password = event => {
    this.setState({password: event.target.value})
  }

  username = event => {
    this.setState({username: event.target.value})
  }

  render() {
    const {Loader, dataError} = this.state

    return (
      <div className="bg-container">
        <form className="card-container" onSubmit={this.submitting}>
          <div className="img-container">
            <img
              className="image1"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              alt="website login"
            />
          </div>
          <div className="input-container">
            <div className="nav-img-container">
              <img
                className="image3"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="website logo"
              />
            </div>
            <label htmlFor="text">USERNAME</label>
            <br />
            <input
              placeholder="Username"
              onChange={this.username}
              type="text"
              id="text"
            />
            <br />
            <label htmlFor="password">PASSWORD</label>
            <br />
            <input
              placeholder="Password"
              onChange={this.password}
              type="password"
              id="password"
            />
            <br />

            <button type="submit">Login</button>
            {Loader ? <p className="error">{dataError}</p> : null}
          </div>
        </form>
      </div>
    )
  }
}
export default LoginForm
