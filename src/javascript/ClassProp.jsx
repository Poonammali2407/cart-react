
import  React, { Component } from "react"

export default class ClassProp extends Component
{
    render(){
        return(
            <div>
       <h1>Mera naam {this.props.name} and mere umr {this.props.age}</h1>
            </div>
        )
    }
}