import React from 'react';
import Card from './Card';

export default function List(props) {
  
  // function to somehow delete card


  // handleAddRandomCard = () => {
  //   const id = Math.random().toString(36).substring(2, 4)
  //     + Math.random().toString(36).substring(2, 4);
  //   const newRandomCard = {
  //     id,
  //     title: `Random Card ${id}`,
  //     content: 'lorem ipsum',
  //   };
  //   props.addRandomCard(newRandomCard, props.key)
  // }
  
  
  
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card) =>
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            content={card.content}
            deleteCard={props.deleteCard}
          />
        )}
        <button
          // onClick={this.handleAddRandomCard}
         
          type='button'
          className='List-add-button'
        >
          + Add Random Card
        </button>
      </div>
    </section>
  )
}
