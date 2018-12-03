import React, { Component } from 'react'

class Section extends Component {
    registerThis = () => {
        this.props.register(this.props.section)
    }

    render(){
        let available = this.props.section.capacity - this.props.section.registered

        return(
            <div className="sectionComponent">
                <h3>{this.props.section.section_id}: {this.props.section.section_title}</h3>
                <p>{this.props.section.department} | Instructor: {this.props.section.instructor}</p>
                <p>{this.props.section.room}</p>
                <div className ="capacity-line">
                    <p>Available: {available} / {this.props.section.capacity}</p> 
            
                    {this.props.section.capacity === this.props.section.registered ? 
                    <p className="closed">closed</p> : 
                    this.props.section.isRegistered ? 
                    <p className="already-registered">registered</p> : 
                    <button className="register-btn" onClick={this.registerThis}>Register</button>
                    }
                    
                </div>
                <p className="hidden">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        )
    }
}

export default Section;