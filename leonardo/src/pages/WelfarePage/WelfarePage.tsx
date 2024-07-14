import { useLocation } from '@tanstack/react-router';
import React from 'react';
import LNavBar from '../LeonardoNavBar';
import { CardOver } from '@/components/ui/CardOver';

export const WelfareGenericPage: React.FC = () => {
	const location = useLocation();

	let PageBg: string = '';
	let titol: string = '';
	let description : string = '';

	if (location.pathname === '/walfareps') {
		PageBg = 'bg-gradient-to-r from-cyan-500 to-blue-600';
		titol = 'Psicologico';
		description = "Il benessere psicologico riguarda la salute mentale e il mantenimento di un equilibrio emotivo positivo nella vita quotidiana.";
	} else if (location.pathname === '/walfarefa') {
		PageBg = 'bg-gradient-to-r from-yellow-500 to-yellow-600';
		titol = 'Familiare';
		description = "Il benessere familiare si concentra sulle relazioni sane e sul supporto reciproco all\'interno della famiglia, creando un ambiente armonioso.";
	} else if (location.pathname === '/walfarefi') {
		PageBg = 'bg-gradient-to-r from-green-600 to-green-700';
		titol = 'Fisico';
		description = "Il benessere fisico include la cura del corpo attraverso una corretta alimentazione, esercizio fisico regolare e uno stile di vita sano.'}";
	} else if (location.pathname === '/walfareec') {
		PageBg = 'bg-gradient-to-r from-orange-600 to-red-700';
		titol = 'Economico';
		description = "Il benessere economico si riferisce alla sicurezza finanziaria e alla gestione efficace delle risorse per garantire una vita stabile e prospera.";
	}

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
		<div className={`relative w-full min-h-screen p-10 md:p-20 ${PageBg}`}>
			<div className="fixed inset-0 w-full h-full bg-leonardoWhite bg-contain bg-no-repeat bg-center filter opacity-20"></div>
			<LNavBar icon={1}></LNavBar>
			<div className="flex flex-wrap mt-10">
				<div className="w-full md:w-1/3 text-center md:text-left mb-4">
					<h1 className="text-white text-5xl md:text-7xl font-bold">Benessere</h1>
					<h1 className="text-white text-5xl md:text-7xl font-bold">{titol}</h1>
				</div>
				<div className="w-full md:w-1/3 flex justify-center md:justify-start mt-4">
					<p className="text-white text-xl text-center md:text-left">
						{description}
					</p>
				</div>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10'>
				{ cards.map(card =>(
					<CardOver title={card.title} description={card.description} background={card.background} over={card.over}></CardOver>
				))}
			</div>
			<div className="fixed bottom-0 left-0 w-full py-2 gray-100 text-center text-xs text-gray-600">
				<a href="/regolamento" className="mx-2 text-black-600 hover:underline">Regolamento</a> |
				<a href="/condizioni" className="mx-2 text-black-600 hover:underline">Condizioni d'uso</a> |
				<a href="/privacy" className="mx-2 text-black-600 hover:underline">Privacy</a> |
				<a href="/sicurezza" className="mx-2 text-black-600 hover:underline">Sicurezza</a>
			</div>
		</div>
	);
};
