import React, { Component, useEffect, useRef, useState } from "react"

export default function Parent (props) {
  const sub2Ref = useRef(null)
    return (
      <div style={{display: 'flex', justifyContent:'space-around'}}>
        <Sub2 ref={sub2Ref} exProps>
        </Sub2>
        <Sub>
        </Sub>
      </div>
    )
}

function Sub (props) {
  const [cnt, setCnt] = useState(0)

  const handleClick = () => {
    setCnt(cnt + 1)
  }
  useEffect(() => {
    console.error('>>>')
  })
  return (
    <div>
      <h1>
      this is the sub comp
      </h1>
      <button onClick={handleClick}>btn on sub</button>
      <h1>
        cnt on sub: {cnt}
      </h1>
      <GranSub nouse={1}></GranSub>
    </div>
  )
}

function Sub2 (props) {
  const [cnt, setCnt] = useState(0)

  const handleClick = () => {
    setCnt(cnt + 1)
  }

  return (
    <div>
      <h1>
      this is the sub2 comp
      </h1>
      <button onClick={handleClick}>btn on sub2</button>
      <h1>
        cnt on sub2: {cnt}
      </h1>
      <GranSub cnt={cnt}></GranSub>
    </div>
  )
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