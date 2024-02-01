import React, { Component } from 'react'

export default class LifeCycle extends Component {
 constructor(){
    super();
    this.state={
        count:0,
        condition:false
    }
 }

 shouldComponentUpdate(nextProps,nextState){
    if(nextState.count>10){
        this.setState({
            condition:true
        })
        return false;
    }
    return true;
 }
     
 handleClick=()=>{
   this.setState({
    count:this.state.count+1})
 }
    
    render() {
    return (
      <div>
        <h1>
{this.state.count}
        </h1> 
        <button onClick={this.handleClick}>Increment</button>
        {this.state.condition && <h1>Congrats You Have Passed!</h1>}

      </div>
    )
  }
}
