import React from "react";
import { useState } from "react";

function Products(props) {
  const [products, setProducts] = useState({});

  // const deleteProduct=(products)=>{(p)=>products.filter(!p.id)}

  function calculateTax(props,price) {
    return (props.tax / 100) * price + price;
  }

  const [newName, setNewNameAdd] = useState("");
  const [newPrice, setNewPriceAdd] = useState("");

  function addProduct() {
    
      if(newName===''){alert('unesi ime')
        return;
      }
       if(newPrice===''){
alert('unesi cenu')
      return;
       }


    setProducts((prevProducts) => ({
      ...prevProducts,
      [newName]: parseFloat(newPrice),
    }));

    setNewNameAdd("");
    setNewPriceAdd("");
  }

  return (
    <>
      <button onClick={() => setProducts({})}>Delete All</button>
      Moji telefoni:
      {Object.entries(products).map(([phone, price]) => (
        <p key={phone}>
          Model mobilnog telefona je: <b>{phone}</b>, njegova cena je:{" "}
          <b>{price}$</b>. <br />
          Njegova ukupna cena sa taksom je <b>{calculateTax(props, price)}$</b>
        </p>
      ))}
      <div>
        <input
          onInput={(e) => setNewNameAdd(e.target.value)}
          type="text"
          placeholder="Unesi ime mobilnog"
        />

        <input
          onInput={(e) => setNewPriceAdd(e.target.value)}
          type="number"
          placeholder="Unesi cenu mobilnog"
        />
        <button onClick={addProduct}>Add new mobile</button>
      </div>
    </>
  );
}

export default Products;
