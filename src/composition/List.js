import React from 'react';
import Card from './Card';

export default function List(props) {
  
  handleAddRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    const newRandomCard = {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
    props.handleAddRandomCard(newRandomCard)
  }
  
  
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card) =>
          <Card
            key={card.id}
            title={card.title}
            content={card.content}
          />
        )}
        <button
          onClick={handleAddRandomCard}
          type='button'
          className='List-add-button'
        >
          + Add Random Card
        </button>
      </div>
    </section>
  )
}
