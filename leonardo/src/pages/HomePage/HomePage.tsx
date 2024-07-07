import React from 'react';
import { ThreeDCardDemo } from './card/cardhome';
import LNavBar from '../LeonardoNavBar';
import CarosleHomePage from './CaroselHomePage';
import { Link } from '@tanstack/react-router';

export const HomePage: React.FC = () => {
	return (
	<div className="relative w-full min-h-screen bg-leonardoRed">
		<div className="fixed inset-0 w-full h-full bg-loginForm bg-contain bg-no-repeat bg-center filter opacity-20"></div>
		<LNavBar icon={1}></LNavBar>
		<div className="relative container mx-auto pt-20 pb-20 z-10">
			<CarosleHomePage></CarosleHomePage>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				<Link to='/walfareps'>
					<ThreeDCardDemo
							title={'Benessere Psicologico'}
							description={'Il benessere psicologico riguarda la salute mentale e il mantenimento di un equilibrio emotivo positivo nella vita quotidiana.'}
							background={'bg-gradient-to-r from-cyan-500 to-blue-600'}
						/>
				</Link>
				<Link to='/walfarefa'>
					<ThreeDCardDemo
							title={'Benessere Familiare'}
							description={'Il benessere familiare si concentra sulle relazioni sane e sul supporto reciproco all\'interno della famiglia, creando un ambiente armonioso.'}
							background={'bg-gradient-to-r from-yellow-500 to-yellow-600'}
						/>
				</Link>
				<Link to='/walfarefi'>
					<ThreeDCardDemo
							title={'Benessere Fisico'}
							description={'Il benessere fisico include la cura del corpo attraverso una corretta alimentazione, esercizio fisico regolare e uno stile di vita sano.'}
							background={'bg-gradient-to-r from-green-600 to-green-700'}
						/>
				</Link>
				<Link to='/walfareec'>
					<ThreeDCardDemo
							title={'Benessere Economico'}
							description={"Il benessere economico si riferisce alla sicurezza finanziaria e alla gestione efficace delle risorse per garantire una vita stabile e prospera."}
							background={'bg-gradient-to-r from-orange-600 to-red-700'}
						/>
				</Link>
			</div>
		</div>
	</div>
	);
};
