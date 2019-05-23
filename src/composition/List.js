import React from 'react';
import Card from './Card';

export default function List(props) {
 // console.log(props.cards[0])
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card, index) =>
          <Card
            key={index}
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
