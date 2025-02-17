import * as React from 'react';
import { useState } from 'react';

function APP() {
  const clickTap = (value) => {
    console.log(value)
  }
  const value = "hello"
  return (
    <>
      <div onClick={() => {clickTap(value)}}>{value}</div>
    </>
  )
}
export default App
