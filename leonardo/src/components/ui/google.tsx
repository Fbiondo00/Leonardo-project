import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GoogleAuthButton = () => {
	const onSuccess = (response: any) => {
	  console.log('Login successo:', response);
	  // Gestisci il successo dell'autenticazione, ad esempio loggare l'utente nel tuo sistema
	};

	const onFailure = (error: any) => {
	  console.log('Login fallito:', error);
	  // Gestisci il fallimento dell'autenticazione, ad esempio mostrare un messaggio di errore
	};

	return (
	  <GoogleOAuthProvider clientId="Il-tuo-client-ID-di-Google">
		<div className="">
		  <GoogleLogin
			onSuccess={onSuccess}
		 onError={onFailure}
			className="bg-blue-500 text-white p-1  rounded"
			
		  />
		</div>
	  </GoogleOAuthProvider>
	);
  };

  export default GoogleAuthButton;
