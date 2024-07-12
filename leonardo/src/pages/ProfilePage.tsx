import { Card } from "@/components/ui/card";
import LNavBar from "./LeonardoNavBar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CardOver } from "@/components/ui/CardOver";

export const ProfilePage = () => {
  const [forCard, setForCard] = useState<boolean>(false);

  const cards = [
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

  return (
    <div className="relative flex flex-col items-center w-full min-h-screen bg-gray-800">
      <div className="fixed  w-full h-full bg-leonardoWhite bg-contain bg-no-repeat bg-center filter opacity-20"></div>
      <LNavBar icon={2} />
      <div className="relative flex flex-col items-center justify-center flex-grow w-full p-12">
        <Card className="w-full max-w-3xl p-6 bg-white shadow-lg">
          <div className="text-center mt-12">
            <h3 className="text-4xl font-semibold leading-norma text-blueGray-700 mb-2">
              Jenna Stones
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              Los Angeles, California
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400">Solution Manager - Creative Tim Officer</i>
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-university mr-2 text-lg text-blueGray-400">University of Computer Science</i>
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center flex flex-wrap justify-center">
            <div className="w-full lg:w-9/12 px-4">
              <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                An artist of considerable range, Jenna the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy writes,
                performs and records all of his own music, giving it a
                warm, intimate feel with a solid groove structure. An
                artist of considerable range.
              </p>
              <Button className="z-index w-full text-white py-2 px-4 rounded-full bg-leonardoRed2" onClick={() => {forCard ? setForCard(false) : setForCard(true)}}>Show more</Button>
            </div>
          </div>
        </Card>
        </div>
        {forCard && (
          <div>
          <div className="w-full relative flex justify-between mt-10">
            <div className="w-full md:w-1/3 text-center md:text-left mb-4">
              <h1 className="text-white text-5xl md:text-7xl font-bold">dajeroma</h1>
            </div>
            <div className="w-full md:w-1/3 flex mt-4">
              <p className="text-white text-xl text-center md:text-left">
                letgoletgosgi
              </p>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
            { cards.map(card =>(
              <CardOver title={card.title} description={card.description} background={card.background} over={card.over}></CardOver>
            ))}
          </div>
        </div>
        )}
    </div>
  );
};
