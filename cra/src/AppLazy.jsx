import React, { Component, Suspense, lazy } from 'react';

const Lazy = lazy(() => import('./Lazy.js'))
function Fallback () {
  return 'oops!'
}
console.error(Lazy.lazy)
export default function (props) {
  return (
    <>
      <Suspense fallback={<Fallback></Fallback>}>
        <Lazy></Lazy>
      </Suspense>
    </>
  )
}

