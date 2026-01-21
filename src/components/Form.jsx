// handling the imports

import React, { useState } from 'react'

export const Form = () => {
    const [text, setText] = useState(" ")
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <h1>{text}</h1>
    </div>
  );
}
