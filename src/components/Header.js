import React, { Component } from 'react';

class Header extends Component {
    render(){
        return (
            <nav className="headerComponent">
                <div className="logo">
                    <img src='./images/logo.png' alt="cca logo"/>
                    <div className='tagline'>
                        <h3>Resources for</h3>
                        <h3>the CCA Community</h3>
                    </div>
                </div>
                <div>
                    <i className="fas fa-search"></i>
                </div>
            </nav>
        )
    }
}

export default Header;