import React, { FC } from 'react';
import RemoteNavbar from 'design_system/Navbar';
import ChakraProvider from 'design_system/ChakraProvider';

const App: FC = () => {
  return (
    <ChakraProvider>
      <RemoteNavbar />
    </ChakraProvider>
  );
};

export default App;
