import React from 'react';
import './App.css';
import FormBeta from './FormBeta';
//import UserData from './UserData';

const UserData = [
    {
      "firstName": "",
      "lastName": "",
      "email": "",
      "password": ""
    }
  ];

class App extends React.Component {



  render() {
  return (
      <div className="App">
          <FormBeta
          UserData={UserData}
          />

      </div>
    );
  }
}

export default App;
