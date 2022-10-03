import React, { useState } from 'react'

function StateFun(props) {

    const[fn,setFn]=useState('nga nga')
    const changfn=()=>{
        setFn('tai nga')
    }
  return (
    <div>
        <p>{props.name}</p>
         <div style={{color:'red'}}>{fn}</div>
      <input type="button" value="Create" onClick={changfn}/>
    </div>
  )
}

export default StateFun