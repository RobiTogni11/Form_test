import React from 'react';
//import UserData from './UserData';
import './App.css';

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  //errori
  firstNameError: "",
  lastNameError: "",
  emailError: "",
  passwordError: ""
};

class FormBeta extends React.Component {
  state = initialState;

  handleChange = (event) => {
    this.setState({
      [event.target.name]:(event.target.value)
    });

  };

  validate = () => {
    let firstNameError = "";
    let lastNameError: "";
    let emailError = "";
    let passwordError = "";

    if (!this.state.firstName) {
      firstNameError = "First name empty";
    }

    if (!this.state.lastName) {
      lastNameError = "Last name empty";
    }

    if (!this.state.email) {
      emailError = "E-mail empty";
    }

    if (!this.state.password) {
      passwordError = "Password empty";
    }

    if (firstNameError || lastNameError ||emailError || passwordError) {
      this.setState({ firstNameError, lastNameError, emailError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.props.UserData.firstName=this.state.firstName;
      this.props.UserData.lastName=this.state.lastName;
      this.props.UserData.email=this.state.email;
      this.props.UserData.password=this.state.password;

    this.setState(initialState);
    }
  };

  render() {
    return (
      <form className="Form" onSubmit={this.handleSubmit}>

        <div className="Form_Camp">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <div className="Error">
            {this.state.firstNameError}
          </div>
        </div>

        <div className="Form_Camp">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <div className="Error">
            {this.state.lastNameError}
          </div>
        </div>


        <div className="Form_Camp">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div className="Error">
            {this.state.emailError}
          </div>
        </div>


        <div className="Form_Camp">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div className="Error">
            {this.state.passwordError}
          </div>
        </div>


        <button className="Button" type="submit">Enter</button>

        <div /*className={"Hidden"}*/>
          <p>First Name: {this.props.UserData.firstName}</p>
          <p>Last Name: {this.props.UserData.lastName}</p>
          <p>Email: {this.props.UserData.email}</p>
          <p>Password: {this.props.UserData.password}</p>
        </div>

      </form>




    );
  }
}

export default FormBeta;
