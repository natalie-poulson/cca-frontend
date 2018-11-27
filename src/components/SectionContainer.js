import React, { Component } from 'react'
import SectionModel from '../models/Section'
import Sections from './Sections';

class SectionContainer extends Component {
    constructor(){
        super()
        this.state = {
            sections:[]
        }
    }
    componentDidMount(){
        this.fetchData()
    }
    fetchData(){
        SectionModel.all().then( (res) => {
            this.setState ({
                sections:res.data.sections,
            })
        })
    }
    render() {
        return (
            <div className="sectionsComponent">
                <Sections sections={this.state.sections} register={this.props.register} />
            </div>
        );
    }
}

export default SectionContainer;