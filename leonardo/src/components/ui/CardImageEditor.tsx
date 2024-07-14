import React, { useState } from 'react';

const CardImageEditor = ({ cards, updateCards }) => {
  const handleImageChange = (index, type, url) => {
    const newCards = [...cards];
    newCards[index][type] = url;
    updateCards(newCards);
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-5">Modifica Immagini delle Card</h1>
      {cards.map((card, index) => (
        <div key={index} className="mb-5">
          <h2 className="text-xl mb-2">{card.title}</h2>
          <input
            type="text"
            placeholder="Update Background URL"
            value={card.background}
            onChange={(e) => handleImageChange(index, 'background', e.target.value)}
            className="w-full px-2 py-1 border rounded mb-2"
          />
          <input
            type="text"
            placeholder="Update Over URL"
            value={card.over}
            onChange={(e) => handleImageChange(index, 'over', e.target.value)}
            className="w-full px-2 py-1 border rounded"
          />
        </div>
      ))}
      <button onClick={() => console.log(cards)} className="mt-5 px-4 py-2 bg-blue-500 text-white rounded">
        Save Changes
      </button>
    </div>
  );
};

export default CardImageEditor;
