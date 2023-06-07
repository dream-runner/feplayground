import React, { useState } from "react";

export default function () {
  const [cnt, setCnt] = useState(1)
  const [output] = useState(() => {
    console.error('>>>>>.')
    return 1
  })
  return (

    <h1>{output}
    <button onClick={() => setCnt(cnt + 1)}>{cnt}</button>
    </h1>
  )
}