import React, { Component } from 'react'

class Registered extends Component {
    render() {
        let registeredList = this.props.registeredList.map( (section)=> {
            return(
                <li key={section.id}>
                <p className='title'>{section.section_id}: {section.section_title}</p>
                <p>{section.department} | {section.instructor}</p>
                <p>{section.room}</p>
                </li>
            )
        })

        return (
            <div className='registered'>
                <h1>Your Classes</h1>
                <ul>{registeredList}</ul>
            </div>
        );
    }
}

export default Registered;