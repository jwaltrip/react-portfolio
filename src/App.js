import React, { Component } from 'react';
import './App.css';
import {Header} from "./components/Header";
import BioCard from "./components/BioCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <BioCard/>
      </div>
    );
  }
}

export default App;
