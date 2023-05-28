import React, { Component } from "react"

export default class MobxClass extends Component {
  state = {}
  render () {
    return (
      <div style={{display: 'flex', justifyContent:'space-around'}}>
        <Sub>
        </Sub>
      </div>
    )
  }
}

class Sub extends Component {
  state = {
    cnt: 0
  }

  render () {
    return (
      <div>
        <h1>
        this is the sub comp
        </h1>
        <button onClick={this.handleClick}>btn on sub</button>
        <h1>
          cnt on sub: {this.state.cnt}
        </h1>
      </div>
    )
  }
}

