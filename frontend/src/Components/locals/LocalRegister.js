import React from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

import { registerUser, updateUser, getUserProfile } from '../../lib/api'
import { isAuthenticated } from '../../lib/auth'

class LocalRegister extends React.Component {
  state = {
    formData: {
      email: '',
      username: '',
      password: '',
      passwordConfirmation: '',
      bio: ''
    },
    redirect: null
  }

  authenticated() {
    return isAuthenticated()
  }

  async componentDidMount(){
    try {
      const res = await getUserProfile()
      if (this.authenticated()){
        this.setState({
          formData: res.data
        })
      }

    } catch (err) {
      console.log(err)
    }  
  }


  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value
    }
    this.setState({
      formData
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const authenticated = this.authenticated()
    const dataToSend = ({ ...this.state.formData, isLocal: true })
    
    if (!authenticated) {
      try {
        await registerUser(dataToSend)

        this.setState({
          redirect: '/login'
        })
        return
      } catch (err) {
        console.log(err)
      }
    }

    if (authenticated) {
      
      try {
        const res = await updateUser(dataToSend)
        console.log(res)

        this.setState({
          redirect: '/profile'
        })

      } catch (err){
        console.log(err)
      }
    }



  }

  render() {
    const { username, email, password, passwordConfirmation, bio } = this.state.formData

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        { !this.authenticated() &&
          <Form.Group widths='equal'>
            <Form.Field
              control={Input}
              label='User name'
              placeholder='User name'
              onChange={this.handleChange}
              name='username'
              value={username}
            />
            <Form.Field
              control={Input}
              label='Email'
              placeholder='Email'
              onChange={this.handleChange}
              name='email'
              value={email}
            />
            <Form.Field
              control={Input}
              label='Password'
              placeholder='Password'
              onChange={this.handleChange}
              name='password'
              value={password}
            />
            <Form.Field
              control={Input}
              label='Password confirmation'
              placeholder='Password confirmation'
              onChange={this.handleChange}
              name='passwordConfirmation'
              value={passwordConfirmation}
            />
          </Form.Group>
        }

        <Form.Group inline>

        </Form.Group>

        {this.authenticated() &&
          <h3>Thanks for your interest in contributing! Just a bit more about you, and we can get your profile set up </h3>
        }

        <Form.Field
          control={TextArea}
          label='About'
          placeholder='Tell us more about you and your location...'
          onChange={this.handleChange}
          name='bio'
          value={bio}

        />

        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    )
  }


}
export default LocalRegister