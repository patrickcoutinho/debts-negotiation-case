import React, { FC } from 'react';
import Index from './pages';
import Ofertas from './pages/ofertas';
import RemoteFooter from 'design_system/Footer';
import RemoteNavbar from 'design_system/Navbar';
import CheckoutPage from './pages/checkout';
import { Routes, Route, useNavigate } from 'react-router-dom';

const App: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <RemoteNavbar
        links={[
          { text: 'Home', action: () => navigate('/') },
          { text: 'Ofertas', action: () => navigate('/ofertas') },
        ]}
      />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="ofertas" element={<Ofertas />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Routes>
      <RemoteFooter />
    </>
  );
};

export default App;
