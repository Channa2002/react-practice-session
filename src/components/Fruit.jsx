import React from 'react'

// ternary operator conditional statments

function Fruit({name, price}) {
  return (
    // <div>this fruit {name} is the cost {price}</div>
    <>
    <li>{price > 100? <h3>this fruit {name} is the cost {price}</h3>: " "}</li>
    </>
  )
}

export default Fruit  