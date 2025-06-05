import Products from "./Components/Products";
import "./App.css";
import { use, useState } from "react";


function App() {
  let [taxi,setTaxi]=useState(0)
  let [name,setName]=useState('NeverniToma')

    
  return (
    <>
      
      <Products tax={taxi}/>
          
    <div>
      <input type="number" placeholder="unesi porez" onInput={(e)=>setTaxi(e.target.value)}/>
      <input type="text" placeholder="unesi text" onInput={(e)=>setName(e.target.value)}/>
      
      <p>Ime unosioca podataka je <b>{name}</b>, a porez na mobilni telefon je <b>{taxi}%</b></p>
    </div>
    </>
  );
}

export default App;
