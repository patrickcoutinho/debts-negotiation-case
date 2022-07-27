/// <reference types="react" />

declare module 'design_system/Button' {
  const Button: React.ComponentType<any>;

  export default Button;
}

declare module 'design_system/Navbar' {
  const Navbar: React.ComponentType;

  export default Navbar;
}

declare module 'design_system/Footer' {
  const Footer: React.ComponentType;

  export default Footer;
}

declare module 'design_system/Page' {
  const Page: React.ComponentType<any>;

  export default Page;
}

declare module 'design_system/Modal' {
  const Modal: React.ComponentType<any>;

  export default Modal;
}

declare module 'design_system/ChakraProvider' {
  function ChakraProvider({ children }: any): any;

  export default ChakraProvider;
}
