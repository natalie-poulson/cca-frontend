import React, { Component } from 'react'
import Section from './Section'

class Registered extends Component {

    render() {
        let registeredList = this.props.registeredList.map( (section)=> {
            return(
                <Section
                key={section.id}
                section={section}
                unregister={this.props.unregister}/>
            )
        })

        return (
            <div className='registeredComponent'>
                <h1>Registered Classes:</h1>
                <ul className='registeredSection'>{registeredList}</ul>
            </div>
        );
    }
}

export default Registered;