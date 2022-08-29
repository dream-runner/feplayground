import React, { useCallback, useEffect, useState } from 'react'
const { Icon, Popup, Button } = window['arc-ui']
document.documentElement.style.fontSize = '50px'

export default function ListFilter (props) {
  const [popVisible, setPopVisible] = useState(false)

  const applyFilter = () => {}
  const handleReset = () => {
    // utils.traverse(meta, function (node) {
    //   const { modelPath } = node
    //   if (modelPath) {
    //     ctx.apis.store.updateDataModel(modelPath, undefined)
    //   }
    // }, { ignoreRoot: true })
    // applyFilter()
    setPopVisible(false)
  }

  const handleConfirm = function () {
    setPopVisible(false)
    applyFilter()
  }

  function handleMaskClick () {
    setPopVisible(false)
  }

  return (
    <>
      <div className="yb-lst-fltr">
        <Icon color='#475569' size='sm' type='icon-filter' onClick={_ => setPopVisible(true)} />
      </div>
      <Popup
        position="right"
        visible={popVisible}
        bodyStyle={{ minWidth: '80vw' }}
        onMaskClick={_ => handleMaskClick()}
      >
        <div className="yb-lst-fltr-pop">
          <div className="pop-bd">
          {
          }
          </div>
          <div className="pop-footer">
            <Button onClick={handleReset}>重置</Button>
            <Button onClick={handleConfirm}>确定</Button>
          </div>
        </div>
      </Popup>
    </>
  )
}