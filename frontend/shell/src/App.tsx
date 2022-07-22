import React, { FC } from 'react';
import Index from './pages';
import Ofertas from './pages/ofertas';
import RemoteFooter from 'design_system/Footer';
import RemoteNavbar from 'design_system/Navbar';
import { Link, Routes, Route } from 'react-router-dom';

const App: FC = () => {
  return (
    <>
      <RemoteNavbar />
      <Link to="/">Home</Link>
      <Link to="/ofertas">Ofertas</Link>

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="ofertas" element={<Ofertas />} />
      </Routes>
      <RemoteFooter />
    </>
  );
};

export default App;
