import React, { Component } from 'react';
import './index.css';
import SectionContainer from './components/SectionContainer';
import Registered from './components/Registered';

class App extends Component {
  constructor() {
    super()
    this.state = {
      registeredList:[]
    }
  }

  register = (section) => {
    let incoming = section
    let alreadyRegistered = this.state.registeredList

    if( alreadyRegistered.includes(incoming) === false) {
      incoming.isRegistered = true
      incoming.registered += 1
      let updatedList = alreadyRegistered.push(incoming)
      this.setState({updatedList})
    }
  }

  render() {
    return (
      <div className="App">
          <img src="./images/nav.png" alt="cca banner"/>
          <div className="App-body">
            <SectionContainer register={this.register}/>
            <Registered registeredList={this.state.registeredList}  />
          </div>
      </div>
    );
  }
}

export default App;
