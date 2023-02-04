import React from 'react'
import { useState } from 'react'
function Botoes() {
  return (
    <div className='Conteiner-buttons'>
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
      <button>1</button>
      <button>2</button>
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
