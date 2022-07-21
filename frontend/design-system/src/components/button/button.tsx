import React from 'react';
import {
  Button as Base,
  ButtonProps as PropsBase,
  ComponentWithAs,
  theme,
  useColorModeValue,
} from '@chakra-ui/react';

export type ButtonProps = Omit<PropsBase, 'colorScheme'>;

const Button: ComponentWithAs<'button', ButtonProps> = ({
  children,
  ...props
}) => (
  <Base colorScheme="teal" mt={10} rounded={'lg'} boxShadow={'xl'} {...props}>
    {children}
  </Base>
);

export default Button;
