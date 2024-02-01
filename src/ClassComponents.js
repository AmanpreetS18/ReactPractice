import React, { Component } from 'react'

export default class ClassComponents extends Component {
  constructor(){
  super();
   this.state={
    name:"Aman",
    btnName:"Hide",
    condition:true
   }
   
  }
  handleClick=()=>{
    this.setState({
        condition : !this.state.condition,
        btnName:this.state.condition?"Show":"Hide"
    })
        
        
  }
    render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.btnName}</button>
        
       {this.state.condition && <h1>
            {this.state.name}
        </h1>}
        
      </div>
    )
  }
}
