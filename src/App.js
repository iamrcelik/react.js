import React, {Component} from 'react';
import './App.css';
import User from "./components/User";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="container">
        <h4 style = {{color : "red", fontSize:"30px"}}>App Component</h4>
        <Navbar title = "Header"></Navbar>
        <User
            name = "Mert ÇELİK"
            salary = "5050"
            department = "IT"

        ></User>

    </div>
  );
}

export default App;
