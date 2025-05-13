
import React from "react"

interface productInterface{
[phone:string]:number

}



const products:productInterface={
    
    'samsung s24':1250,
    'iphone 16':254,
    'sagem 15':124, 
    'motorola s':554,
    'Nokia 4':988}

function Products(props:any){

return(
    <>
    
    Moji telefoni:
       {Object.entries(products).map(([phone,price])=><p>model je: {phone}, cena je: {price}$ a cena sa taksom je {taxPrice}$</p>)}  
    
    </>
)

}

function taxPrice(props:any,price:number):number{
return price*(1/props.tax)+price
}

export default Products