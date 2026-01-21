import React from 'react'

function Hello() {
    const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
  return (
    <div>{animals.map(animal => (
        <h1>{animal}</h1>
    ))}</div>
  )
}

export default Hello