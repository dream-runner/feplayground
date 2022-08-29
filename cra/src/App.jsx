import React, { Component } from "react"

export default class Parent extends Component {
  state = {}
  sub2Ref = React.createRef()
  componentWillReceiveProps () {
    console.error('>>>')
  }
  shouldComponentUpdate () {
    console.error('???')
  }
  render () {
    return (
      <div style={{display: 'flex', justifyContent:'space-around'}}>
        <Sub2 ref={this.sub2Ref} exProps>
        </Sub2>
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

  componentWillReceiveProps () {
    console.error('>>> Sub will recieve props')
  }

  handleClick = () => {
    this.setState({
      cnt: this.state.cnt + 1
    })
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
        <GranSub nouse={1}></GranSub>
      </div>
    )
  }
}

class Sub2 extends Component {
  state = {
    cnt: 0
  }
  
  componentWillReceiveProps () {
    console.error('>>> Sub2 will recieve props')
  }
  
  componentDidUpdate () {
    console.error('>>> Sub2 will update')

  }

  handleClick = () => {
    this.setState({
      cnt: this.state.cnt + 1
    })
  }

  componentDidMount() {
    console.error(this.props.ref)
    console.error(this.props.exProps)
  }

  render () {
    return (
      <div>
        <h1>
        this is the sub2 comp
        </h1>
        <button onClick={this.handleClick}>btn on sub2</button>
        <h1>
          cnt on sub2: {this.state.cnt}
        </h1>
        <GranSub cnt={this.state.cnt}></GranSub>
      </div>
    )
  }
}

class GranSub extends Component {
  state = {}
  // shouldComponentUpdate () {
  //   return false
  // }
  componentWillReceiveProps () {
    console.error('>>> GranSub will recieve props')
  }
  handleBlur = () => {
  }
  
  handleBlurInner = e => e.stopPropagation()

  render () {
    return (
      <div data-ts={+new Date()} onBlur={this.handleBlur}>
        this is the grandsub comp
        cnt from sub: { this.props.cnt }
        <input type="text" onBlur={this.handleBlurInner} />
      </div>
    )
  }
}