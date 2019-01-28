import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from "./components/Sidebar";
import MessageList from "./components/MessageList";
import AddMessage from "./components/AddMessage";


class App extends Component {
  render() {
    return (
      <div id = "container">
      <Sidebar/>
      <section id = "main">
      <MessageList/>
      <AddMessage/>
      </section>
      </div>
    );
  }
}

export default App;
