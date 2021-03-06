import React from 'react';
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
  passwordError: "",

  submit_list:[]
};

export default class FormBeta extends React.Component {
  state = initialState;

  handleChange = (event) => {

    this.setState({
      [event.target.name]:(event.target.value)
    });

  };

  validate = () => {
    let firstNameError = "";
    let lastNameError = "";
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

      this.setState({
        submit_list : this.state.submit_list.concat(
          {firstName : this.state.firstName, lastName : this.state.lastName,
          email : this.state.email, password : this.state.password})
      });

      this.setState(initialState);
             
    }
  };

  render() {
    return (

    <React.Fragment> 
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

        <button className="Button" onClick={this.handleSubmit}>Enter</button>
   
      </form>

      <div >
        <ul> {this.state.submit_list.map((value,index)=>
            <li key={index}>
              <p><b>First Name:</b> {value.firstName}</p>
              <p><b>Last Name:</b> {value.lastName}</p>
              <p><b>Email:</b> {value.email}</p>
              <p><b>Password:</b> {value.password}</p>
            </li>)}
        </ul>
      </div>

    </React.Fragment>

    );
  }
}


