import * as React from "react";

export default class Lazy extends React.Component {
  // return 'this is lazy loaded'
  onchange() {
    console.error(this)
  }
  render () {
    return <input onChange={this.onchange}/>
  }

}
Lazy.lazy = true