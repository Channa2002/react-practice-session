// handling the imports

import React, { useState } from 'react'

// export const Form = () => {
//     const [text, setText] = useState(" ")
//   return (
//     <div>
//       <input
//         type="text"
//         onChange={(e) => setText(e.target.value)}
//         value={text}
//       />
//       <h1>{text}</h1>
//     </div>
//   );
// }

// handling multiple inputs and submitting the forms
export const Form = () => {
    const [name, setName] = useState({firstName: "", lastName: ""})

    function handleSubmit(e) {
     e.preventDefault();
     console.log(name)
    }
  return (
    <div>
      <form>
      <input
        type="text"
        onChange={(e) => setName({...name, firstName: e.target.value})}
        value={name.firstName}
      />
       <input
        type="text"
        onChange={(e) => setName({...name, lastName:e.target.value})}
        value={name.lastName}
      />
      <button onClick={(e) => handleSubmit(e)}>submit</button>
      </form>
      <h1>{name.firstName}</h1>
      <h1>{name.lastName}</h1>

    </div>
  );
}
