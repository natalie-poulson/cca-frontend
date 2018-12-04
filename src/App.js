import React, { Component } from 'react';
import './index.css';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';


class App extends Component {
  constructor() {
    super()
    this.state = {
      registeredList:[]
    }
  }

  unregister = (section) => {
    let alreadyRegistered = this.state.registeredList
    let index = alreadyRegistered.indexOf(section);

    if (index > -1 ){
      alreadyRegistered.splice(index,1)
      section.isRegistered = false
      section.registered -= 1
      this.setState({registeredList: alreadyRegistered})
    }
  }

  register = (section) => {
    let alreadyRegistered = this.state.registeredList

    if (alreadyRegistered.includes(section)===false){
      section.isRegistered = true
      section.registered += 1
      alreadyRegistered.push(section)
      this.setState({registeredList: alreadyRegistered})
    }
  }

  render() {
    return (
      <div className="AppComponent">
          <Header />
          <Main unregister={this.unregister} register={this.register} registeredList={this.state.registeredList}/>
          <Footer />
      </div>
    );
  }
}

export default App;
