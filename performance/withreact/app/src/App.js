import { Fragment, useCallback, useEffect, useState } from "react";
import { Button, Divider, Row, Col, Space } from 'antd'

const genLongStr = scale => new Array(scale).fill(' ').join('')
const scale = 20 * Math.pow(1024, 2)
const seed = genLongStr(scale)
const precision = 2

function DashBoard () {
  const [memoUsed, setMemoUsed] = useState([])

  const monitor = useCallback(() =>{
    let memoUsed = window.performance.memory.usedJSHeapSize
    memoUsed = memoUsed / Math.pow(2, 20)
    setMemoUsed(memoUsed.toFixed(precision))
    requestAnimationFrame(monitor)
  })
  useEffect(() => {
    requestAnimationFrame(monitor)
  }, [])
  return (
    <h2>
      Memory Used:
      <span style={{ color: 'red', margin: '5px' }}>{memoUsed}</span>
      M
    </h2>
  )
}

const print = console.error

class RootStore {
  constructor(txt) {
    this.txt = txt
    this.form = new FormStore(this)
  }
}

class FormStore {
  constructor(rootStore) {
    this.rootStore = rootStore
  }
}

export default function App () {
  const [elements, setElements] = useState([])
  const addElement = async () => {
    const content = `${Math.random().toString(20).substring(2)}`.concat(seed)
    const rootStore = new RootStore(content)
    await new Promise(resolve => setTimeout(resolve, 0))
    const newElementKey = `${elements.length + 1}`
    elements.push({
      key: newElementKey,
      label: newElementKey,
      children: (
      <>
        {rootStore.txt[0]}
        <Button onClick={() => print(rootStore.txt)}>Print</Button>
      </>
      )
    })
    setElements([...elements])
  }

  const removeElement = () => {
    elements.pop()
    setElements([...elements])
  }

 const gc = () => {
  window.gc?.()
 }

  return (
    <div>
      <Divider orientation="left"></Divider>
      <Row>
        <Col span={24} offset={1}>
          <DashBoard></DashBoard>
        </Col>
      </Row>
      <Divider orientation="left"></Divider>
      <Row>
        <Col span={6} offset={2}>
        <Button onClick={addElement} type="primary" danger>Add Element</Button>
        </Col>
        <Col span={6} offset={2}>
        <Button onClick={removeElement} type="primary">Remove Element</Button>
        </Col>
        <Col span={6} offset={2}>
        <Button onClick={gc} type="primary">Garbage Collection</Button>
        </Col>
      </Row>
      <Divider orientation="left"></Divider>
      <Row>
        <Col span={24} offset={1}>
          <Space direction="horizontal" size='middle'>
            {elements.map(el => {
              return (
                <Fragment key={el.key}>{el.children}</Fragment>
              )
            })}
          </Space>
        </Col>
      </Row>
    </div>
  )
}