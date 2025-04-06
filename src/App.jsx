

import { useState } from 'react'

import './App.css'

let hoursDate=new Date().getHours()
let modes=hoursDate<18?"blue":"red"

function App() {
 
  return (
    <>

   <div style={{color:modes}}>
Sada je tacno {hoursDate} sati i zato je boja slova {modes}
   </div>
     
      
      </>
  )
}

export default App
