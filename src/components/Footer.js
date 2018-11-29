import React, { Component } from 'react';

class Footer extends Component {
    render(){
        return (
            <footer className="footerComponent">
                <div>
                    <img src='./images/footer.png' alt="cca logo"/>
                </div>
                <div className = "footerCampus">
                    <div className = "campusInfo">
                        <h4>San Francisco Campus</h4>
                        <p>1111 Eighth Street</p>
                        <p>415.703.9500</p>
                    </div>
                    <div className = "campusInfo">
                        <h4>Oakland Campus</h4>
                        <p>5212 Broadway</p>
                        <p>4510.594.3600</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;