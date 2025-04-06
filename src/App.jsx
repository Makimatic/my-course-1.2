

import { useState } from 'react'

import './App.css'

let hoursDate=new Date().getHours()
let modes=hoursDate>7&&hoursDate<20?"yellow":"magenta"

function App() {
 
  return (
    <>

   <div style={{background:modes}}>
Sada je  {hoursDate} sati i naki minut i zato je boja pozadine {modes}
   </div>
     
      
      </>
  )
}

export default App
