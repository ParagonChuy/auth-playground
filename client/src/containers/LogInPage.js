import React, { Component, PropTypes } from 'react';
import LogInForm from '../components/LogInForm';

class LogInPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      errors: {},
      user: {
        email: '',
        password: '',
      }
    }
    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);

  }

  changeUser(event){
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  processForm(event){
    event.preventDefault();

    console.log('email:', this.state.user.email);
    console.log('password:', this.state.user.password);
  }


  render(){
    return (
      <LogInForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }
}

export default LogInPage;
