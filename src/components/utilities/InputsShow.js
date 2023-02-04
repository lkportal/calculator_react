import React from 'react'

function InputsShow({val}) {
  return (
    <div>
      <input type='number' disabled={true} value={val}></input>
    </div>
  )
}

export default InputsShow
