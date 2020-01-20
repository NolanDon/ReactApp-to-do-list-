import  React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Adding Dynamic Data

export default class App extends Component 
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      userName : "Nolan",
      course : "React Zero to Hero"
    }
  }

  changeStateData = () => {
    this.setState (
      {userName: this.state.userName == "Nolan" ? "Riley" : "Nolan" }
    )
  };

  render = () => 
    <div>
      <h4 className="bg-primary text-white text-center p-2">
        { this.state.userName } Course
        <button className="btn btn-danger m-2"
          onClick={ this.changeStateData }>
          Change The State  
        </button>
      </h4>
    </div>
}
