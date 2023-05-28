import { makeObservable, observable, action, flow } from 'mobx'
import * as mobx from 'mobx'
import { observer } from 'mobx-react'
import React from  'react'

window.mobx = mobx
class Store {
  constructor () {
    this.cnt = 1
    this.list = [
      { cnt: 1 },
      { cnt: 2 }
    ]
    
    makeObservable(this, {
      list: observable,
      cnt: observable,
      updateCnt: flow,
      updateViewState: action
    })
  }
  *updateCnt () {
    this.cnt++
    this.cnt++
    yield Promise.resolve()
    this.cnt++
  }

  updateViewState (itemKey, propName, propValue) {
    this.viewState[itemKey][propName] = propValue
  }
}

const decorateItem = item => {
  return item.cnt + 2
}

const Inner = observer( (props) => {
  return (
    <>
    {props.store.list.map((v, index) => {
      return <div key={index}>{decorateItem(v)}</div> 
    })}
    </>
  )
})

// const InnerWrapper = observer(props => {
//   return (
//     <Inner store={props.store}></Inner>
//   )
// })
const store = new Store()
window.store = store

export default function Outer () {
  return <Inner store={store}/>
}