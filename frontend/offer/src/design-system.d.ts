/// <reference types="react" />

declare module 'design_system/Navbar' {
  const Navbar: React.ComponentType;

  export default Navbar;
}

declare module 'design_system/ChakraProvider' {
  function ChakraProvider({ children }: any): any;

  export default ChakraProvider;
}
