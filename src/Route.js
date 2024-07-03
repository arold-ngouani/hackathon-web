import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TokenReader from './components/TokenReader';
import Dashboard from './components/Dashboard';
import Logbyurlnfc from './components/Logbyurlnfc';

const AppRoutes = ({ user, onAuthenticate }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <TokenReader onAuthenticate={onAuthenticate} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logbyurlnfc" element={<Logbyurlnfc />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
