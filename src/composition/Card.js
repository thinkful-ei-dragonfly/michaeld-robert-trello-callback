import React from 'react';

function Card(props) {
console.log(props.id, 'This is card')

  return (
    <div className='Card'>
      <button onClick={() => props.deleteCard(props.id)}
        type='delete'>delete</button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      
    </div>
  )
}

export default Card;