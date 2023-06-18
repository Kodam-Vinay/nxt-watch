import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  LoginBgContainer,
  FormContainer,
  ImageElement,
  EachInputContainer,
  LabelElement,
  InputElement,
  ShowPasswordContainer,
  LoginButton,
  ShowError,
} from './styledComponents'

import ReactContext from '../../context/ReactContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    checked: false,
    errorMsg: '',
    loginError: false,
  }

  onSuccessLogin = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  //   onFailureLogin = errorMsg => {
  //     this.setState({loginError: true, errorMsg})
  //   }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheck = () => {
    this.setState(prevState => ({checked: !prevState.checked}))
  }

  onSubmitForm = async event => {
    const {username, password} = this.state
    event.preventDefault()
    const userDetails = {
      username,
      password,
    }
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessLogin(data.jwt_token)
    } else {
      //   this.onFailureLogin(data.error_msg)
      this.setState({loginError: true, errorMsg: data.error_msg})
    }
  }

  render() {
    const {username, password, checked, errorMsg, loginError} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ReactContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const imageUrl = isDarkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginBgContainer changeColor={isDarkMode}>
              <FormContainer
                changeColor={isDarkMode}
                onSubmit={this.onSubmitForm}
              >
                <ImageElement src={imageUrl} alt="website logo" />

                <EachInputContainer>
                  <LabelElement htmlFor="userName" changeColor={isDarkMode}>
                    USERNAME
                  </LabelElement>
                  <InputElement
                    id="userName"
                    changeColor={isDarkMode}
                    placeholder="Username"
                    onChange={this.onChangeUsername}
                    value={username}
                  />
                </EachInputContainer>
                <EachInputContainer>
                  <LabelElement htmlFor="password" changeColor={isDarkMode}>
                    PASSWORD
                  </LabelElement>
                  <InputElement
                    type={checked ? 'text' : 'password'}
                    id="password"
                    changeColor={isDarkMode}
                    placeholder="Password"
                    onChange={this.onChangePassword}
                    value={password}
                  />
                </EachInputContainer>
                <ShowPasswordContainer>
                  <InputElement
                    type="checkbox"
                    checkbox
                    onChange={this.onChangeCheck}
                    value={checked}
                    id="checkboxInput"
                  />
                  <LabelElement
                    htmlFor="checkboxInput"
                    changeColor={isDarkMode}
                  >
                    Show Password
                  </LabelElement>
                </ShowPasswordContainer>
                <LoginButton type="submit">Login</LoginButton>
                {loginError && (
                  <ShowError changeColor={isDarkMode}>*{errorMsg}</ShowError>
                )}
              </FormContainer>
            </LoginBgContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}
export default Login
