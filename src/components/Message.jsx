import React from 'react'

function Message() {
    function sayHello() {
        console.log("hello")
    }
  return (
    <div> 
        <button onClick={sayHello}>click me to say hello</button>
    </div>
  )
}

export default Message