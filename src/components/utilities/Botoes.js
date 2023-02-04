import React from 'react'
import { useState } from 'react'
import InputsShow from './InputsShow'
function Botoes() {
const[btnValur,setBtnValur] = useState('')

  const handleBtnOnclick = (e) =>{
   
    setBtnValur(e.target.value)
    console.log(e)
  }

  return (
    <div className='Conteiner-buttons'>
      <InputsShow val={btnValur}/>
    <div className="card-char">        
      <button>C</button>
      <button>()</button>
      <button>%</button>
      <button>/</button>
    </div>  
    <div className="card-char">  
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>X</button>
    </div>  
    <div className="card-char">  
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
    </div>  
    <div className="card-char"> 
      <button onClick={handleBtnOnclick} value="1">1</button>
      <button onClick={handleBtnOnclick} value="2">2</button>
      <button>3</button>
      <button>+</button>
    </div>  
    <div className="card-char">
      <button>+/-</button>
      <button>0</button>
      <button>,</button>
      <button>=</button>
     </div> 

    </div>
  )
}

export default Botoes
