import React, { Component } from 'react'
import Section from './Section'

class Sections extends Component {
    render(){
        let sections = this.props.sections.map( (section) => {
            return (
                <Section
                key={section.id}
                section={section}
                register={this.props.register}/>
            )
        })

        return(
            <div className="sectionsComponent">
            {sections}
            </div>
        )

    }
}

export default Sections