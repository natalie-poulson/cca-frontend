import React, { Component } from 'react';
import SectionContainer from './SectionContainer';
import Registered from './Registered';

class Main extends Component {
    render(){
        return (
            <div className="registrationPage">
                <SectionContainer register={this.props.register}/>
                <Registered registeredList={this.props.registeredList} />
            </div>
        )
    }
}

export default Main;