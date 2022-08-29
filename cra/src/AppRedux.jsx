import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducer from './reducer'
import logger from 'redux-logger'
import React, { Component, useState } from 'react'

function RawSub (props) {
  return (
    <>
      {props.storeCnt}
      <GrandSub></GrandSub>
    </>
  )
}

function GrandSub (props) {
  const [cnt, setCnt] = useState(0)
  return (
    <>
      <h1>{cnt}</h1>
      <button onClick={() => setCnt(cnt + 1)}>cnt++</button>
    </>
  )
}

const Sub = connect(state => state)(RawSub)
const middleWares = [reduxThunk, logger]
const store = createStore(reducer, applyMiddleware(...middleWares))

export default function AppRedux () {
  return (
    <Provider store={store}>
      <Sub></Sub>
    </Provider>
  )
}
