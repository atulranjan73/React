import React, { useState } from 'react'

function Hide() {
    const [status ,setstatus] = useState(true) ;
  return (
    <div>
      <div className='appps'>
       
          {
             status?<h1>hello</h1> : null
          }
        
      
        <button onClick={()=>setstatus(true)}>show </button>
        <button onClick={()=>setstatus(false)}>Hide</button>
      
      </div>
    </div>
  )
}

export default Hide
