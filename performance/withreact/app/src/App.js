import { useCallback, useEffect, useState } from "react";
import { Tabs, Button, Divider, Row, Col } from 'antd'

const genLongStr = scale => new Array(scale).fill(' ').join('')
const scale = 50 * Math.pow(1024, 2)
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

export default function App () {
  const [tabs, setTabs] = useState([])
  const [activeTab, setActiveTab] = useState('')
  const addPanel = async () => {
    const content = `tab${tabs.length + 1}`.concat(seed)
    await new Promise(resolve => setTimeout(resolve, 0))
    const newTabKey = `tab${tabs.length + 1}`
    tabs.push({
      key: newTabKey,
      label: newTabKey,
      children: (
      <>
        <Button onClick={() => print(content)}>Print</Button>
      </>
      )
    })
    setTabs([...tabs])
    setActiveTab(newTabKey)
  }

  const removePanel = () => {
    tabs.pop()
    setTabs([...tabs])
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
        <Button onClick={addPanel} type="primary" danger>Add Panel</Button>
        </Col>
        <Col span={6} offset={2}>
        <Button onClick={removePanel} type="primary">Remove Panel</Button>
        </Col>
        <Col span={6} offset={2}>
        <Button onClick={gc} type="primary">Garbage Collection</Button>
        </Col>
      </Row>
      <Divider orientation="left"></Divider>
      <Row>
        <Col span={24} offset={1}>
          <Tabs activeKey={activeTab} defaultActiveKey="tab0" items={tabs} onChange={setActiveTab}></Tabs>
        </Col>
      </Row>
    </div>
  )
}