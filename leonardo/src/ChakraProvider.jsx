import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Route } from 'react-router-dom';

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Route />
  </ChakraProvider>,
  document.getElementById('root')
);
