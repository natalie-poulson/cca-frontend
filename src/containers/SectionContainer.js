import React, { Component } from 'react'
import SectionModel from '../models/Section'
import Sections from '../components/Sections';

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
            <Sections sections={this.state.sections} register={this.props.register} />
        );
    }
}

export default SectionContainer;