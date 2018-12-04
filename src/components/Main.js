import React, { Component } from 'react';
import SectionContainer from '../containers/SectionContainer';
import Registered from './Registered';

class Main extends Component {
    render(){
        return (
            <div className="registrationPage">
                <SectionContainer unregister={this.props.unregister} register={this.props.register}/>
                <Registered unregister={this.props.unregister} registeredList={this.props.registeredList} />
            </div>
        )
    }
}

export default Main;