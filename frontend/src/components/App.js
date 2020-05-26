import React, { Component } from 'react'
import { render } from "react-dom";

export default class App extends Component{
    
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        console.log('da')
    }
    render(){
        return(
            <h1>macar merge din nou</h1>
        )
    }
}

const container = document.getElementById('app')
render(<App/>, container)