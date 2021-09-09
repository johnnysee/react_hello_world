import React from 'react'

const Greetinginput = (props) => {
  return (
    <div>
      <input 
        type="text" 
        placeholder="Type a planet name" 
        onChange={(event) => {
          props.renderGreeting(event.target.value)
        }}
         />
    </div>
  )
}

export default Greetinginput
