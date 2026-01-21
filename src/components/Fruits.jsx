import React from 'react'
import Fruit from "./Fruit"



function Fruits() {

  const fruits = [
    {name: "apple", price:"120"},
    {name: "orange", price:"130"},
    {name: "banana", price:"60"},
  ]
  return (
    <div>
      {
        fruits.map(fruit => (
          <Fruit name={fruit.name} price={fruit.price}/>
        ))
      }
    </div>
  )
}


export default Fruits;