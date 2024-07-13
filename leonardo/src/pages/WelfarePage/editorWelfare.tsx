import { useLocation } from '@tanstack/react-router';
import React, { useState, useEffect } from 'react';
import LNavBar from '../LeonardoNavBar';
import { CardOver } from '@/components/ui/CardOver';

interface Card {
  title: string;
  description: string;
  background: string;
  over: string;
}

export const EditCardPage: React.FC = () => {
  const location = useLocation();

  let pageBg: string = '';
  let titol: string = '';
  let description: string = '';

  if (location.pathname === '/walfareps') {
    pageBg = 'bg-gradient-to-r from-cyan-500 to-blue-600';
    titol = 'Psicologico';
    description =
      "Il benessere psicologico riguarda la salute mentale e il mantenimento di un equilibrio emotivo positivo nella vita quotidiana.";
  } else if (location.pathname === '/walfarefa') {
    pageBg = 'bg-gradient-to-r from-yellow-500 to-yellow-600';
    titol = 'Familiare';
    description =
      "Il benessere familiare si concentra sulle relazioni sane e sul supporto reciproco all'interno della famiglia, creando un ambiente armonioso.";
  } else if (location.pathname === '/walfarefi') {
    pageBg = 'bg-gradient-to-r from-green-600 to-green-700';
    titol = 'Fisico';
    description =
      "Il benessere fisico include la cura del corpo attraverso una corretta alimentazione, esercizio fisico regolare e uno stile di vita sano.'}";
  } else if (location.pathname === '/walfareec') {
    pageBg = 'bg-gradient-to-r from-orange-600 to-red-700';
    titol = 'Economico';
    description =
      "Il benessere economico si riferisce alla sicurezza finanziaria e alla gestione efficace delle risorse per garantire una vita stabile e prospera.";
  }

  const initialCards: Card[] = [
    {
      title: "Card 1",
      description: "Description for card 1",
      background: "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      over: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif"
    },
    {
      title: "Card 2",
      description: "Description for card 2",
      background: "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      over: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif"
    },
    {
      title: "Card 3",
      description: "Description for card 3",
      background: "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      over: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif"
    },
    {
      title: "Card 4",
      description: "Description for card 4",
      background: "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      over: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif"
    },
    {
      title: "Card 5",
      description: "Description for card 5",
      background: "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      over: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif"
    },
  ];

  const [cards, setCards] = useState<Card[]>(initialCards);

  useEffect(() => {
    // Update cards based on location change if needed
    let newCards = [...initialCards]; // Reset cards to initial state
    if (location.pathname === '/walfareps') {
      newCards = initialCards.map((card, index) => ({
        ...card,
        title: `Card ${index + 1} - Psicologico`,
        description:
          "Description for card 1 - Il benessere psicologico riguarda la salute mentale e il mantenimento di un equilibrio emotivo positivo nella vita quotidiana.",
      }));
    } else if (location.pathname === '/walfarefa') {
      newCards = initialCards.map((card, index) => ({
        ...card,
        title: `Card ${index + 1} - Familiare`,
        description:
          "Description for card 2 - Il benessere familiare si concentra sulle relazioni sane e sul supporto reciproco all'interno della famiglia, creando un ambiente armonioso.",
      }));
    } else if (location.pathname === '/walfarefi') {
      newCards = initialCards.map((card, index) => ({
        ...card,
        title: `Card ${index + 1} - Fisico`,
        description:
          "Description for card 3 - Il benessere fisico include la cura del corpo attraverso una corretta alimentazione, esercizio fisico regolare e uno stile di vita sano.'}",
      }));
    } else if (location.pathname === '/walfareec') {
      newCards = initialCards.map((card, index) => ({
        ...card,
        title: `Card ${index + 1} - Economico`,
        description:
          "Description for card 4 - Il benessere economico si riferisce alla sicurezza finanziaria e alla gestione efficace delle risorse per garantire una vita stabile e prospera.",
      }));
    }

    setCards(newCards);
  }, [location.pathname]); // Update effect on location.pathname change

  const handleCardChange = (index: number, field: keyof Card, value: string) => {
    const newCards = [...cards];
    newCards[index] = { ...newCards[index], [field]: value };
    setCards(newCards);
  };

  return (
    <div className={`relative w-full min-h-screen p-10 md:p-20 ${pageBg}`}>
      <div className="fixed inset-0 w-full h-full bg-leonardoWhite bg-contain bg-no-repeat bg-center filter opacity-20"></div>
      <LNavBar icon={1}></LNavBar>
      <div className="flex flex-wrap mt-10">
        <div className="w-full md:w-1/3 text-center md:text-left mb-4">
          <h1 className="text-white text-5xl md:text-7xl font-bold">Benessere</h1>
          <h1 className="text-white text-5xl md:text-7xl font-bold">{titol}</h1>
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:justify-start mt-4">
          <p className="text-white text-xl text-center md:text-left">{description}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
        {cards.map((card, index) => (
          <div key={index} className="relative overflow-hidden">
            <img src={card.background} alt={card.title} className="object-cover w-full h-64" />
            <img
              src={card.over}
              alt=""
              className="absolute top-0 left-0 w-full h-full object-cover transition duration-300 transform scale-110 opacity-0 hover:opacity-100"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-0 transition duration-300 transform scale-0 hover:scale-100">
              <div className="text-center text-white">
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="mt-2">{card.description}</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gray-900 bg-opacity-50">
              <input
                type="text"
                placeholder="Title"
                value={card.title}
                onChange={(e) => handleCardChange(index, 'title', e.target.value)}
                className="mb-2 p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Description"
                value={card.description}
                onChange={(e) => handleCardChange(index, 'description', e.target.value)}
                className="mb-2 p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Background URL"
                value={card.background}
                onChange={(e) => handleCardChange(index, 'background', e.target.value)}
                className="mb-2 p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Overlay URL"
                value={card.over}
                onChange={(e) => handleCardChange(index, 'over', e.target.value)}
                className="p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 left-0 w-full py-2 gray-100 text-center text-xs text-gray-600">
        <a href="/regolamento" className="mx-2 text-black-600 hover:underline">
          Regolamento
        </a>{' '}
        |{' '}
        <a href="/condizioni" className="mx-2 text-black-600 hover:underline">
          Condizioni d'uso
        </a>{' '}
        |{' '}
        <a href="/privacy" className="mx-2 text-black-600 hover:underline">
          Privacy
        </a>{' '}
        |{' '}
        <a href="/sicurezza" className="mx-2 text-black-600 hover:underline">
          Sicurezza
        </a>
      </div>
    </div>
  );
};

export default EditCardPage;
