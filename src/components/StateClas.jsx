import React, { Component } from 'react'

export default class StateClas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'firstname':'nga',
            'lastname':'nga',
        }
        
    }
    changefn = ()=>{
      this.setState({'firstname':'tai'})
  }
  render() {
    return (
        <>
        <p>{this.props.address}</p>
      <div>{this.state.firstname} {this.state.lastname}</div>
      <input type="button" value="Create" onClick={this.changefn}/>
      </>
    )
  }
}
