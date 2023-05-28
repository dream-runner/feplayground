import React, { Component } from "react"

export default class AppClass extends Component {
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
function Pu () {
  return 'shit'
}
function GrandSub (props) {
  // return props.children
  return React.Children.map(props.children, child => React.cloneElement(child, {key: 'aaa'}))
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
        <GrandSub>
          <Pu key={'pu'}/>
        </GrandSub>
      </div>
    )
  }
}

