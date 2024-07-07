import { useLocation } from '@tanstack/react-router';
import React from 'react';
import LNavBar from '../LeonardoNavBar';

export const WelfareGenericPage: React.FC = () => {
	const location = useLocation();

	let PageBg : string = '';
	let titol : string = '';

	if (location.pathname === '/walfareps') {
		PageBg = 'bg-gradient-to-r from-cyan-500 to-blue-600';
		titol = 'Benessere Psicologico';
	} else if (location.pathname === '/walfarefa') {
		PageBg = 'bg-gradient-to-r from-yellow-500 to-yellow-600';
		titol = 'Benessere Familiare';
	} else if (location.pathname === '/walfarefi') {
		PageBg = 'bg-gradient-to-r from-green-600 to-green-700';
		titol = 'Benessere Fisico';
	} else if (location.pathname === '/walfareec') {
		PageBg = 'bg-gradient-to-r from-orange-600 to-red-700';
		titol = 'Benessere Economico';

	}



	return (
		<div className={`relative w-full min-h-screen ${PageBg}`}>
			<div className="fixed inset-0 w-full h-full bg-leonardoWhite bg-contain bg-no-repeat bg-center filter opacity-20"></div>
			<LNavBar icon={1}></LNavBar>
			<div className='fixed justify-center text-7xl font-bold p-40'>
				<h1>{titol}</h1>
			</div>
		</div>
	);
};
