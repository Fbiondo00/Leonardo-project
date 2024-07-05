
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginForm } from './pages/LoginPage'
import {RegisterForm} from './pages/Registration/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import { ChakraProvider } from "@chakra-ui/react";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
	  <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
		<Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;