import React, { forwardRef, useRef } from "react";

function Sub (props, ref) {
  const onClick = () => props.onClick('b')
  return <button onClick={onClick} ref={ref}> click me </button>
}

const Forowarded = forwardRef(Sub)

export default function Parent (props) {
  const ref = useRef(null)
  const onClick = a => console.error(ref.current)
  return <Forowarded onClick={onClick} ref={ref}></Forowarded>
}