import React from 'react';
import { Button } from 'react-day-picker';
import GoogleLogin from 'react-google-login';

const GoogleAuthButton = () => {
  // Sostituisci con il tuo Client ID fornito dal Google Developer Console
  const clientId = "Il-tuo-client-ID-di-Google";

  // Funzione chiamata al successo dell'autenticazione
  const onSuccess = (response: any) => {
    console.log('Login successo:', response.profileObj);
    // Qui puoi gestire il successo dell'autenticazione, ad esempio loggare l'utente nel tuo sistema
  };

  // Funzione chiamata al fallimento dell'autenticazione
  const onFailure = (error: any) => {
    console.log('Login fallito:', error);
    // Qui puoi gestire il fallimento dell'autenticazione, ad esempio mostrare un messaggio di errore
  };

  return (
      <GoogleLogin
        clientId={clientId}
        buttonText="Login con Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        // Puoi aggiungere altre props come scope per definire i permessi necessari
      />


  );
};

export default GoogleAuthButton;
